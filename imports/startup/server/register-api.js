import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

const typeDefs = [`
type Query {
  hi: String
}
`];

const testSchema = `
  type Query {
    hi: String
  }
`;

const resolvers = {
  Query: {
    hi() {
      return 'Hello Level Up';
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({ schema });
