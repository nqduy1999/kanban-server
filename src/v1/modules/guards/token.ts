import { NextFunction, Response } from 'express';
import * as jsonwebtoken from 'jsonwebtoken';
import { IGetUserAuthInfoRequest, JwtPayload } from '../auth/interface';
import { UserSchema } from '../auth/schema';


const tokenDecode = (req: IGetUserAuthInfoRequest) => {
  const bearerHeader = req.headers['authorization']
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ')[1]
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const tokenDecoded: JwtPayload | any = jsonwebtoken.verify(
        bearer,
        process.env.TOKEN_SECRET_KEY
      )
      return tokenDecoded
    } catch {
      return false
    }
  } else {
    return false
  }
}

export const verifyToken = async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
  const tokenDecoded = tokenDecode(req)
  if (tokenDecoded) {
    const user = await UserSchema.findById(tokenDecoded.id)
    if (!user) return res.status(401).json('Unathorized')
    req.user = user
    next()
  } else {
    res.status(401).json('Unathorized')
  }
}

export const verifyTokenAdmin = async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
  const tokenDecoded = tokenDecode(req)
  if (tokenDecoded) {
    const user = await UserSchema.findById(tokenDecoded.id)
    if (!user) return res.status(401).json({ msg: 'Unathorized' })
    if (user.role !== 'admin') return res.status(401).json({ msg: "You don't have permission to access this data" })
    req.user = user
    next()
  } else {
    res.status(401).json({ msg: 'Unathorized' })
  }
}