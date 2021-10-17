const Game = require('../../models/schema/game');
// QUERY
const game = async (root, { _id }) => {
  return prepare(await Game.findOne(ObjectId(_id)));
};

const games = async () => {
  return (await Game.find({}).toArray()).map(prepare);
};

// MUTATION
const createGame = async (root, args, context, info) => {
  const res = await Game.insertOne(args);
  return prepare(res.ops[0]);
};

const updateGame = async (root, args, context, info) => {};

module.exports = {
  game,
  games,
  createGame,
  updateGame,
};
