import * as expressRouter from 'express'
import { tokenHandler, validation } from '../guards'
import { param } from 'express-validator'
import { BoardController } from './controller'

const router = expressRouter.Router()

router.post(
  '/',
  tokenHandler.verifyToken,
  BoardController.create
)

router.get(
  '/',
  tokenHandler.verifyToken,
  BoardController.getAll
)

router.put(
  '/',
  tokenHandler.verifyToken,
  BoardController.updatePosition
)

router.get(
  '/favourites',
  tokenHandler.verifyToken,
  BoardController.getFavourites
)

router.put(
  '/favourites',
  tokenHandler.verifyToken,
  BoardController.updateFavouritePosition
)

router.get(
  '/:boardId',
  param('boardId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid id')
    } else return Promise.resolve()
  }),
  validation.validate,
  tokenHandler.verifyToken,
  BoardController.getOne
)

router.put(
  '/:boardId',
  param('boardId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid id')
    } else return Promise.resolve()
  }),
  validation.validate,
  tokenHandler.verifyToken,
  BoardController.update
)

router.delete(
  '/:boardId',
  param('boardId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid id')
    } else return Promise.resolve()
  }),
  validation.validate,
  tokenHandler.verifyToken,
  BoardController.delete
)


export { router as boardRouter }
