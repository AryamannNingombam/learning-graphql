import { NextFunction, Request, Response } from 'express'
import AuthorModel, { AuthorDoc } from '../models/Author.model'

export const AddAuthor = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body as AuthorDoc
  return AuthorModel.create(body)
    .then((auth) => {
      return res.status(200).json({
        success: true,
      })
    })
    .catch((err) => {
      console.log('error')
      console.log(err)
      return res.status(500).json({
        success: false,
        message: 'Unknown server error!',
      })
    })
}
