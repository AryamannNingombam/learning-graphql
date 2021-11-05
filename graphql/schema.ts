import { GraphQLSchema } from 'graphql'
import RootType from './types/Root.type'

const MainSchema = new GraphQLSchema({
  query: RootType,
})

export default MainSchema
