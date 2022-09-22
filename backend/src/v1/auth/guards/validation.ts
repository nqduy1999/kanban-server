import { NextFunction, Request, Response } from "express"
import { validationResult } from 'express-validator';
import * as mongoose from 'mongoose';


export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next()
}

export const isObjectId = (value) => mongoose.Types.ObjectId.isValid(value)
