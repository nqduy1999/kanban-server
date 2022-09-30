import { Request, Response } from "express"
import { UserSchema } from "../auth/schema";

export class UserAdminController {
  public static getAllUser = async (req: Request, res: Response) => {
    try {
      const users = await UserSchema.find();
      res.status(200).json({ users })

    } catch (err) {
      res.status(500).json(err)
    }
  }
}