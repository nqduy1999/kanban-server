import { Request } from "express";
import { ObjectId } from "mongoose";

export interface IUser {
  username: string,
  password: string,
  role?: string,
  _id: ObjectId
}

export interface IGetUserAuthInfoRequest extends Request {
  user: IUser
}

export interface JwtPayload {
  _id: string
}