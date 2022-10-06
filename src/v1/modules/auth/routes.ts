import * as expressRouter from 'express'
import { body } from 'express-validator'
import { UserController } from './controller'
import { tokenHandler, validation } from '../guards'
import { IGetUserAuthInfoRequest } from './interface'
import { UserSchema } from './schema'

const router = expressRouter.Router()

router.post(
  '/signup',
  body('username').isLength({ min: 8 }).withMessage(
    'username must be at least 8 characters'
  ),
  body('password').isLength({ min: 8 }).withMessage(
    'password must be at least 8 characters'
  ),
  body('confirmPassword').isLength({ min: 8 }).withMessage(
    'confirmPassword must be at least 8 characters'
  ),
  body('username').custom(value => {
    return UserSchema.findOne({ username: value }).then(user => {
      if (user) {
        return Promise.reject('username already used')
      }
    })
  }),
  validation.validate,
  UserController.register
)

router.post(
  '/login',
  body('username').isLength({ min: 8 }).withMessage(
    'username must be at least 8 characters'
  ),
  body('password').isLength({ min: 8 }).withMessage(
    'password must be at least 8 characters'
  ),
  validation.validate,
  UserController.login
)

router.post(
  '/verify-token',
  tokenHandler.verifyToken,
  (req: IGetUserAuthInfoRequest, res: expressRouter.Response) => {
    res.status(200).json({ user: req.user })
  }
)

router.post(
  '/checking-username',
  validation.validate,
  UserController.findUserByName
)

router.get(
  '/anything',
  (req: expressRouter.Request, res: expressRouter.Response) => {
    res.status(200).send({
      message: 'GET request successfulll!!!!'
    })
  }
)
export { router as authRouter }
