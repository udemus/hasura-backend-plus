import { Router } from "express";
import nocache from "nocache";
import changeEmail from "./change-email";
import getJwks from "./jwks";
import loginAccount from "./login";
import logout from "./logout";
import mfa from "./mfa";
import changePassword from "./change-password";
import providers from "./providers";
import registerAccount from "./register";
import token from "./token";
import activateAccount from "./activate";
import magicLink from "./magic-link";
import { AUTHENTICATION } from "@shared/config";

const router = Router()


router.use(nocache())

router.get('/jwks', getJwks)
router.use('/token', token)
router.use('/providers', providers)
router.post('/logout', logout)

router.use((req, res, next) => {
  if (!AUTHENTICATION.ENABLED) {
    console.log(`Please set the AUTH_ENABLED env variable to true to use the auth routes.`)
    return res.boom.notFound()
  } else {
    return next()
  }
})

router.use('/change-email', changeEmail)
router.get('/activate', activateAccount)

router.get('/magic-link', magicLink)
router.use('/mfa', mfa)

router
  .post('/login', loginAccount)
  .post('/register', registerAccount)
  .use('/change-password', changePassword)

export default router
