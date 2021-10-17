const User = require('../../models/schema/user');
const prepare = require('../../util');
// QUERY
const user = async (root, { _id }) => {
  return prepare(await User.findOne(ObjectId(_id)));
};

const users = async () => {
  return (await User.find({}).toArray()).map(prepare);
};

// MUTATION
const createUser = async (root, args, context, info) => {
  const res = await User.create(args);
  return prepare(res.ops[0]);
};

const updateUser = async (root, args, context, info) => {};

module.exports = {
  user,
  users,
  createUser,
  updateUser,
};
