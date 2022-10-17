import { Request, Response } from "express"
import * as CryptoJS from 'crypto-js';
import * as jsonwebtoken from 'jsonwebtoken';
import { UserSchema } from "./schema";
import { renderResponse } from "../../middlewares/response.middleware";
import { tokenDecode } from "../guards/token";
import { IGetUserAuthInfoRequest } from "./interface";

export class UserController {
  public static register = async (req: Request, res: Response) => {
    const { password } = req.body
    try {
      req.body.password = CryptoJS.AES.encrypt(
        password,
        process.env.PASSWORD_SECRET_KEY
      )
      const user = await UserSchema.create(req.body)

      res.status(201).json(renderResponse(201, { user }, "Register success"))
    } catch (err) {
      res.status(500).json(err)
    }
  }

  public static login = async (req: Request, res: Response) => {
    const { username, password } = req.body
    try {
      const user = await UserSchema.findOne({ username }).select('password username')
      if (!user) {
        return res.status(401).json(renderResponse(401, {
          param: 'username'
        }, 'Invalid username or password'
        ))
      }

      const decryptedPass = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASSWORD_SECRET_KEY
      ).toString(CryptoJS.enc.Utf8)

      if (decryptedPass !== password) {
        return res.status(401).json(renderResponse(401,
          {
            param: 'username',
          }, 'Invalid username or password'))
      }

      user.password = undefined

      const token = jsonwebtoken.sign(
        { id: user._id },
        process.env.TOKEN_SECRET_KEY,
        { expiresIn: '30m' }
      )

      res.status(200).json(renderResponse(200, { token }, "Login success"))

    } catch (err) {
      console.log(err, 'err');

      res.status(500).json(err)
    }
  }


  public static getUser = async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
      const tokenDecoded = tokenDecode(req)
      if (tokenDecoded) {
        const user = await UserSchema.findById(tokenDecoded.id)
        console.log(user, " user success");
        if (!user) return res.status(401).json(renderResponse(401, {}, 'Unathorized'))
        req.user = user
        return res.status(200).json(renderResponse(200, { user }, 'Success'))
      } else {
        res.status(401).json(renderResponse(401, {}, 'Unathorized'))
      }
    } catch (err) {
      res.status(500).json(err)
    }
  }

  public static findUserByName = async (req: Request, res: Response) => {
    const { username } = req.body
    try {
      const users = await UserSchema.find({ username });
      if (users.length > 0) {
        return res.status(400).json(renderResponse(400, {}, 'Username existed'))
      }
      res.status(200).json(renderResponse(200, {}, 'Available'))
    } catch (err) {
      res.status(500).json(renderResponse(500, { err }, ''))
    }
  }

  public static getAllUser = async (req: Request, res: Response) => {
    try {
      const users = await UserSchema.find();
      res.status(200).json({ users })

    } catch (err) {
      res.status(500).json(err)
    }
  }

}