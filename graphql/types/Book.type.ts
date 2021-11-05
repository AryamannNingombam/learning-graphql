import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import mongoose from 'mongoose';
import AuthorType from './Author.type'

const BookType : GraphQLObjectType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    subtitle: {
      type: GraphQLString,
    },

    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    author:{
      type:AuthorType,
      resolve:async(authorId:mongoose.Types.ObjectId)=>{

      }
    }
  }),
})

export default BookType;