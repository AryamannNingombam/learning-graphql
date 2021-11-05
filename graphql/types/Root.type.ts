import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'
import BookType from './Book.type'
import AuthorType from './Author.type'
import mongoose from 'mongoose'
import BookModel from '../../models/Book.model'
import AuthorModel from '../../models/Author.model'




const RootType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Root',
  description: 'Root Queries',
  fields: () => ({
    book: {
      type: BookType,
      description: 'Get a book by _id',
      args: {
        _id: {
          type: GraphQLString,
        },
      },
      resolve: async (parent, args) => {
        const _id = args._id as mongoose.Types.ObjectId
        const book = await BookModel.findById(_id)
        return book
      },
    },
    books: {
      type: new GraphQLList(BookType),
      description: 'Get all the available books',
      resolve: async (parent, args) => {
        const books = await BookModel.find({})
        return books
      },
    },
    author: {
      type: AuthorType,
      description: 'Get author details',
      args: {
        _id: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        const _id = args._id as mongoose.Types.ObjectId
        const author = await AuthorModel.findById(_id)
        return author
      },
    },
  }),
})

export default RootType
