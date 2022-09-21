import { Request, Response } from "express"
import * as CryptoJS from 'crypto-js';
import * as jsonwebtoken from 'jsonwebtoken';
import { UserSchema } from "./schema";

export class UserController {
  public static register = async (req: Request, res: Response) => {
    const { password } = req.body
    try {
      req.body.password = CryptoJS.AES.encrypt(
        password,
        process.env.PASSWORD_SECRET_KEY
      )

      const user = await UserSchema.create(req.body)
      const token = jsonwebtoken.sign(
        { id: user._id },
        process.env.TOKEN_SECRET_KEY,
        { expiresIn: '24h' }
      )
      res.status(201).json({ user, token })
    } catch (err) {
      res.status(500).json(err)
    }
  }

  // exports.login = async (req, res) => {
  //   const { username, password } = req.body
  //   try {
  //     const user = await User.findOne({ username }).select('password username')
  //     if (!user) {
  //       return res.status(401).json({
  //         errors: [
  //           {
  //             param: 'username',
  //             msg: 'Invalid username or password'
  //           }
  //         ]
  //       })
  //     }

  //     const decryptedPass = CryptoJS.AES.decrypt(
  //       user.password,
  //       process.env.PASSWORD_SECRET_KEY
  //     ).toString(CryptoJS.enc.Utf8)

  //     if (decryptedPass !== password) {
  //       return res.status(401).json({
  //         errors: [
  //           {
  //             param: 'username',
  //             msg: 'Invalid username or password'
  //           }
  //         ]
  //       })
  //     }

  //     user.password = undefined

  //     const token = jsonwebtoken.sign(
  //       { id: user._id },
  //       process.env.TOKEN_SECRET_KEY,
  //       { expiresIn: '24h' }
  //     )

  //     res.status(200).json({ user, token })

  //   } catch (err) {
  //     res.status(500).json(err)
  //   }
  // }
}