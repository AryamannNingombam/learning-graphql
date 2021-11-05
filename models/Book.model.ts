import mongoose from 'mongoose'

export interface BookDoc extends mongoose.Document {
  title: string
  subtitle: string
  author: mongoose.Types.ObjectId
  description: string
  published: Date
}

export const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  author: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  published: {
    type: Date,
    required: true,
    default: new Date(Date.now()),
  },
})

export default mongoose.model<BookDoc>('Book', BookSchema)
