import {asyncWrapper} from "@shared/helpers";
import {Request, Response, Router} from "express";
import {AccountData, Session, UserData} from "@shared/types";
import {OAuth2Client} from 'google-auth-library';
import {PROVIDERS} from "@shared/config";
import {manageProviderStrategy} from "./utils";
import {setRefreshToken} from "@shared/cookies";
import {createHasuraJwt, newJwtExpiry} from "@shared/jwt";

const client = new OAuth2Client(PROVIDERS.google?.clientID)

const transformProfile = ({ email, name, picture, sub }: {
  sub: string;
  name: string;
  given_name: string;
  picture: string;
  email: string;
  email_verified: boolean;
  locale: string;
}): UserData => ({
  id: sub,
  email: email as string,
  name: name,
  avatar_url: picture,
})

// NEW
const googleOneTap = async (req: Request, res: Response): Promise<void> => {
  const { body } = req;

  // default to true
  const useCookie = typeof body.cookie !== 'undefined' ? body.cookie : true

  const ticket = await client.verifyIdToken({
    idToken: body.credential as string,
  })

  const payload = ticket.getPayload()

  const account = (await manageProviderStrategy('google', transformProfile as any)(req, '', '', payload as any, (err: any, user: any) => {
    return user;
  })) as unknown as AccountData

  // COPY: login
  const refresh_token = await setRefreshToken(res, account.id, useCookie)

  const jwt_token = createHasuraJwt(account)
  const jwt_expires_in = newJwtExpiry

  const session: Session = { jwt_token, jwt_expires_in, user: account.user }
  if (!useCookie) session.refresh_token = refresh_token

  res.send(session)


  // if (!refresh_token || !refresh_token.value) {
  //   throw Boom.unauthorized('Invalid or expired refresh token.')
  // }
  //
  // // get account based on refresh token
  // const { auth_refresh_tokens } = await request<HasuraData>(selectRefreshToken, {
  //   refresh_token: refresh_token.value,
  //   current_timestamp: new Date()
  // })
  //
  // if (!auth_refresh_tokens?.length) {
  //   throw Boom.unauthorized('Invalid or expired refresh token.')
  // }
  //
  //
  // // create a new refresh token
  // const new_refresh_token = uuidv4()
  // const { account } = auth_refresh_tokens[0]
  //
  // // delete old refresh token
  // // and insert new refresh token
  // try {
  //   await request(updateRefreshToken, {
  //     old_refresh_token: refresh_token.value,
  //     new_refresh_token_data: {
  //       account_id: account.id,
  //       refresh_token: new_refresh_token,
  //       expires_at: new Date(newRefreshExpiry())
  //     }
  //   })
  // } catch (error) {
  //   throw Boom.badImplementation('Unable to set new refresh token')
  // }
  //
  // const permission_variables = JSON.stringify(generatePermissionVariables(account))
  //
  // const jwt_token = createHasuraJwt(account)
  // const jwt_expires_in = newJwtExpiry
  // const user: UserData = {
  //   id: account.user.id,
  //   name: account.user.name,
  //   email: account.email,
  //   avatar_url: account.user.avatar_url
  // }
  // const session: Session = { jwt_token, jwt_expires_in, user }
  // if (refresh_token.type === 'cookie') {
  //   setCookie(res, new_refresh_token, permission_variables)
  // } else {
  //   session.refresh_token = new_refresh_token
  // }
  // res.send(session)
};

export default (router: Router) => router.post('/google-one-tap', asyncWrapper(googleOneTap))
