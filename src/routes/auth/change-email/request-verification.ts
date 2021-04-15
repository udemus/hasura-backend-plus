import { Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import Boom from '@hapi/boom'

import { setNewTicket, setNewEmail } from '@shared/queries'
import { asyncWrapper } from '@shared/helpers'
import { APPLICATION, AUTHENTICATION } from '@shared/config'
import { emailClient } from '@shared/email'
import { request } from '@shared/request'
import { SetNewEmailData } from '@shared/types'

import { getRequestInfo } from './utils'
import { RequestExtended } from '@shared/types'

async function requestChangeEmail(req: RequestExtended, res: Response): Promise<unknown> {
  if(!AUTHENTICATION.VERIFY_EMAILS) {
    throw Boom.badImplementation(`Please set the VERIFY_EMAILS env variable to true to use the auth/change-email/request route.`)
  }

  const { user_id, new_email } = await getRequestInfo(req)

  // smtp must be enabled for request change password to work.
  if (!APPLICATION.EMAILS_ENABLE) {
    throw Boom.badImplementation('SMTP settings unavailable')
  }

  // generate new ticket and ticket_expires_at
  const ticket = uuidv4()
  const now = new Date()
  const ticket_expires_at = new Date()
  // ticket active for 60 minutes
  ticket_expires_at.setTime(now.getTime() + 60 * 60 * 1000)
  // set new ticket
  try {
    await request(setNewTicket, {
      user_id,
      ticket,
      ticket_expires_at
    })
  } catch (error) {
    console.error('Unable to set new ticket for user')
    return Boom.badImplementation('Unable to set new ticket')
  }
  // set new email
  let name
  try {
    const setNewEmailReturn = await request<SetNewEmailData>(setNewEmail, { user_id, new_email })
    name = setNewEmailReturn.update_auth_accounts.returning[0].user.name
  } catch (error) {
    console.error(error)
    throw Boom.badImplementation('unable to set new email')
  }
  // send email
  try {
    await emailClient.send({
      template: 'change-email',
      locals: {
        ticket,
        url: APPLICATION.SERVER_URL,
        name
      },
      message: {
        to: new_email,
        headers: {
          'x-ticket': {
            prepared: true,
            value: ticket
          }
        }
      }
    })
  } catch (err) {
    console.error('Unable to send email')
    console.error(err)
    throw Boom.badImplementation()
  }

  return res.status(204).send()
}

export default asyncWrapper(requestChangeEmail)
