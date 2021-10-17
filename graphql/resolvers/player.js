const Player = require('../../models/schema/player');
// QUERY
const player = async (root, { _id }) => {
  return prepare(await Player.findOne(ObjectId(_id)));
};

const players = async () => {
  return (await Player.find({}).toArray()).map(prepare);
};

// MUTATION
const createPlayer = async (root, args, context, info) => {
  const res = await Player.insertOne(args);
  return prepare(res.ops[0]);
};

const updatePlayer = async (root, args, context, info) => {};

module.exports = {
  player,
  players,
  createPlayer,
  updatePlayer,
};
