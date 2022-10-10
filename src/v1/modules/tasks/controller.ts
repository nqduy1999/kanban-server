/* eslint-disable @typescript-eslint/no-explicit-any */
import { SectionSchema } from "../section/schema"
import { TaskSchema } from "./schema"
import { Request, Response } from "express";
import { renderResponse } from "../../middlewares/response.middleware";

export class TaskController {

  public static create = async (req: Request, res: Response) => {
    const { sectionId } = req.body
    try {
      const section = await SectionSchema.findById(sectionId)
      const tasksCount = await TaskSchema.find({ section: sectionId }).count()
      const task: any = await TaskSchema.create({
        section: sectionId,
        position: tasksCount > 0 ? tasksCount : 0
      })
      task._doc.section = section
      res.status(201).json(renderResponse(200, { task }, ""))
    } catch (err) {
      res.status(500).json(renderResponse(500, { err }, ""))
    }
  }

  public static update = async (req: Request, res: Response) => {
    const { taskId } = req.params
    try {
      const task = await TaskSchema.findByIdAndUpdate(
        taskId,
        { $set: req.body }
      )
      res.status(200).json(renderResponse(200, { task }, "updated"))
    } catch (err) {
      res.status(500).json(renderResponse(500, { err }, ""))
    }
  }

  public static delete = async (req: Request, res: Response) => {
    const { taskId } = req.params
    try {
      const currentTask = await TaskSchema.findById(taskId)
      await TaskSchema.deleteOne({ _id: taskId })
      const tasks = await TaskSchema.find({ section: currentTask.section }).sort('postition')
      for (const key in tasks) {
        await TaskSchema.findByIdAndUpdate(
          tasks[key].id,
          { $set: { position: key } }
        )
      }
      res.status(200).json(renderResponse(200, {}, 'deleted'))
    } catch (err) {
      res.status(500).json(renderResponse(500, { err }, ""))
    }
  }

  public static updatePosition = async (req: Request, res: Response) => {
    const {
      resourceList,
      destinationList,
      resourceSectionId,
      destinationSectionId
    } = req.body
    const resourceListReverse = resourceList.reverse()
    const destinationListReverse = destinationList.reverse()
    try {
      if (resourceSectionId !== destinationSectionId) {
        for (const key in resourceListReverse) {
          await TaskSchema.findByIdAndUpdate(
            resourceListReverse[key].id,
            {
              $set: {
                section: resourceSectionId,
                position: key
              }
            }
          )
        }
      }
      for (const key in destinationListReverse) {
        await TaskSchema.findByIdAndUpdate(
          destinationListReverse[key].id,
          {
            $set: {
              section: destinationSectionId,
              position: key
            }
          }
        )
      }
      res.status(200).json(renderResponse(500, {}, 'updated'))
    } catch (err) {
      res.status(500).json(renderResponse(500, { err }, ""))
    }
  }
}