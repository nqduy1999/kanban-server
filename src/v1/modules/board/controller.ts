/* eslint-disable @typescript-eslint/no-explicit-any */
import { SectionSchema } from "../section/schema"
import { TaskSchema } from "../tasks/schema"
import { BoardSchema } from "./schema"
import { Request, Response } from "express";
import { IGetUserAuthInfoRequest } from "../auth/interface";
import { renderResponse } from "../../middlewares/response.middleware";

export class BoardController {

  public static create = async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
      const boardsCount = await BoardSchema.find().count()
      const board = await BoardSchema.create({
        user: req.user._id,
        position: boardsCount > 0 ? boardsCount : 0
      })
      res.status(201).json(
        renderResponse(201, { board }, "")
      )
    } catch (err) {
      res.status(500).json(renderResponse(500,
        {
          err
        }, ""))
    }
  }


  public static getAll = async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
      const boards = await BoardSchema.find({ user: req.user._id }).sort('-position')
      res.status(200).json(renderResponse(200, { boards }, ""))
    } catch (err) {
      res.status(500).json(err)
    }
  }


  public static updatePosition = async (req: Request, res: Response) => {
    const { boards } = req.body
    try {
      for (const key in boards.reverse()) {
        const board = boards[key]
        await BoardSchema.findByIdAndUpdate(
          board.id,
          { $set: { position: key } }
        )
      }
      res.status(200).json(renderResponse(200, {}, "update success"))
    } catch (err) {
      res.status(500).json(renderResponse(500, { err }, ""))
    }
  }

  public static getOne = async (req: IGetUserAuthInfoRequest, res: Response) => {
    const { boardId } = req.params
    try {
      const board: any = await BoardSchema.findOne({ user: req.user._id, _id: boardId })
      if (!board) return res.status(404).json(renderResponse(404, {}, 'Board not found'))
      const sections: any = await SectionSchema.find({ board: boardId })
      for (const section of sections) {
        const tasks: any = await TaskSchema.find({ section: section.id }).populate('section').sort('-position')
        section._doc.tasks = tasks
      }
      board._doc.sections = sections
      res.status(200).json(renderResponse(200, { board }, ""))
    } catch (err) {
      res.status(500).json(renderResponse(500, { err }, "err"))
    }
  }

  public static update = async (req: Request, res: Response) => {
    const { boardId } = req.params
    const { title, description, favourite } = req.body

    try {
      if (title === '') req.body.title = 'Untitled'
      if (description === '') req.body.description = 'Add description here'
      const currentBoard = await BoardSchema.findById(boardId)
      if (!currentBoard) return res.status(404).json(renderResponse(404, {}, 'Board not found'))

      if (favourite !== undefined && currentBoard.favourite !== favourite) {
        const favourites = await BoardSchema.find({
          user: currentBoard.user,
          favourite: true,
          _id: { $ne: boardId }
        }).sort('favouritePosition')
        if (favourite) {
          req.body.favouritePosition = favourites.length > 0 ? favourites.length : 0
        } else {
          for (const key in favourites) {
            const element = favourites[key]
            await BoardSchema.findByIdAndUpdate(
              element.id,
              { $set: { favouritePosition: key } }
            )
          }
        }
      }

      const board = await BoardSchema.findByIdAndUpdate(
        boardId,
        { $set: req.body }
      )
      res.status(200).json(renderResponse(200, { board }, ""))
    } catch (err) {
      res.status(500).json(err)
    }
  }

  public static getFavourites = async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
      const favourites = await BoardSchema.find({
        user: req.user._id,
        favourite: true
      }).sort('-favouritePosition')
      res.status(200).json(renderResponse(200, { favourites }, ""))
    } catch (err) {
      res.status(500).json(renderResponse(500, { err }, ""))
    }
  }

  public static updateFavouritePosition = async (req: Request, res: Response) => {
    const { boards } = req.body
    try {
      for (const key in boards.reverse()) {
        const board = boards[key]
        await BoardSchema.findByIdAndUpdate(
          board.id,
          { $set: { favouritePosition: key } }
        )
      }
      res.status(200).json(renderResponse(200, {}, 'updated'))
    } catch (err) {
      res.status(500).json(renderResponse(500, { err }, ""))
    }
  }


  public static delete = async (req: Request, res: Response) => {
    const { boardId } = req.params
    try {
      const sections = await SectionSchema.find({ board: boardId })
      for (const section of sections) {
        await TaskSchema.deleteMany({ section: section.id })
      }
      await SectionSchema.deleteMany({ board: boardId })

      const currentBoard = await BoardSchema.findById(boardId)

      if (currentBoard.favourite) {
        const favourites = await BoardSchema.find({
          user: currentBoard.user,
          favourite: true,
          _id: { $ne: boardId }
        }).sort('favouritePosition')

        for (const key in favourites) {
          const element = favourites[key]
          await BoardSchema.findByIdAndUpdate(
            element.id,
            { $set: { favouritePosition: key } }
          )
        }
      }

      await BoardSchema.deleteOne({ _id: boardId })

      const boards = await BoardSchema.find().sort('position')
      for (const key in boards) {
        const board = boards[key]
        await BoardSchema.findByIdAndUpdate(
          board.id,
          { $set: { position: key } }
        )
      }

      res.status(200).json(renderResponse(200, {}, 'deleted'))
    } catch (err) {
      res.status(500).json(renderResponse(500, { err }, ""))
    }
  }
}