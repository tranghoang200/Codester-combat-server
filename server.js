const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema.gql');
const resolvers = require('./graphql/resolvers');
const Models = require('./models');
const ErrorHandler = require('./helpers/errorHandler.js');

let apolloServer = null;

async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      return {
        Models,
        req,
      };
    },
    formatError: ErrorHandler.formatGQLError,
    introspection: true,
    playground: true,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    // change this if you want to host schema on a different path
    path: '/',
  });
}
startServer();

const app = require('./index');

// Here you set the PORT and IP of the server
const port = 8001;
const ip = '127.0.0.1';

app.listen({ port, ip }, () =>
  console.log(
    `🚀 Server ready at http://${ip}:${port}${apolloServer.graphqlPath}`
  )
);

module.exports = app;
