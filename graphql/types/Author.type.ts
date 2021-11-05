import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import BookModel from '../../models/Book.model'
import BookType from './Book.type'

const AuthorType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Author',
  description: 'Author information',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    books: {
      type: new GraphQLList(BookType),
      resolve: async (author) => {
        const allBooks = await BookModel.find({ author })
        return allBooks
      },
    },
  }),
})

export default AuthorType
