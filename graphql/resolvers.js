const champ = require('./resolvers/champ');
const game = require('./resolvers/game');
const player = require('./resolvers/player');
const problem = require('./resolvers/problem');
const { user, users, createUser, updateUser } = require('./resolvers/user');
const { rank } = require('./resolvers/rank');

const _resolvers = {
  Query: {
    user,
    users,
  },
  Mutation: {
    createUser,
    updateUser,
  },
};

module.exports = _resolvers;
