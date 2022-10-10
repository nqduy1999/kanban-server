/* eslint-disable @typescript-eslint/no-explicit-any */
import { TaskSchema } from "../tasks/schema"
import { SectionSchema } from "./schema"
import { Request, Response } from "express";
import { renderResponse } from "../../middlewares/response.middleware";

export class SectionController {

  public static create = async (req: Request, res: Response) => {
    const { boardId } = req.params
    try {
      const section: any = await SectionSchema.create({ board: boardId })
      section._doc.tasks = []
      res.status(201).json(renderResponse(200, { section }, ""))
    } catch (err) {
      res.status(500).json(renderResponse(200, { err }, ""))
    }
  }

  public static update = async (req: Request, res: Response) => {
    const { sectionId } = req.params
    try {
      const section: any = await SectionSchema.findByIdAndUpdate(
        sectionId,
        { $set: req.body }
      )
      section._doc.tasks = []
      res.status(200).json(renderResponse(200, { section }, ""))
    } catch (err) {
      res.status(500).json(renderResponse(200, { err }, ""))
    }
  }

  public static delete = async (req: Request, res: Response) => {
    const { sectionId } = req.params
    try {
      await TaskSchema.deleteMany({ section: sectionId })
      await SectionSchema.deleteOne({ _id: sectionId })
      res.status(200).json(renderResponse(200, {}, 'deleted'))
    } catch (err) {
      res.status(500).json(renderResponse(200, { err }, ""))
    }
  }
}