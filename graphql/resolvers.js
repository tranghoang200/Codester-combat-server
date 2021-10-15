const hello = require('./resolvers/hello');
const greet = require('./resolvers/greet');

const _resolvers = {
  Query: {
    hello,
  },
  Mutation: {
    greet,
  },
};

module.exports = _resolvers;
