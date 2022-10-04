import * as expressRouter from 'express'
import { UserAdminController } from './controller'
import { tokenHandler, validation } from '../guards'

const router = expressRouter.Router()

router.get(
  '/users',
  validation.validate,
  tokenHandler.verifyTokenAdmin,
  UserAdminController.getAllUser
)

export { router as adminRouter }
