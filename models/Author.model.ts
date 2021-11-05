import mongoose from 'mongoose'

export interface AuthorDoc extends mongoose.Document {
  name: string
  age: number
  books: [mongoose.Types.ObjectId]
  email: string
  password: string
  timestamp: Date
}

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  books: {
    type: [mongoose.Types.ObjectId],
    required: true,
    default: [],
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  password: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: new Date(Date.now()),
  },
})

export default mongoose.model<AuthorDoc>('Author', AuthorSchema)
