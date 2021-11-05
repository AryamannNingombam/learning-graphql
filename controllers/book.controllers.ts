import { NextFunction, Request, Response } from 'express'
import BookModel, { BookDoc } from '../models/Book.model'

export const AddBook = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body as BookDoc
  if (!body)
    return res.status(500).json({
      success: false,
      error: 'No book data found',
    })
  return BookModel.create(body)
    .then((book) => {
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
