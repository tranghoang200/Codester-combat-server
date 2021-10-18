const { user, users, createUser, updateUser } = require('../schema/user');

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
