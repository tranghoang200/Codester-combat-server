const Champ = require('../../models/schema/champ');

// QUERY
const champ = async (root, { _id }) => {
  return prepare(await Champ.findOne(ObjectId(_id)));
};

const champs = async () => {
  return (await Champ.find({}).toArray()).map(prepare);
};

// MUTATION
const createChamp = async (root, args, context, info) => {
  const res = await Champ.insertOne(args);
  return prepare(res.ops[0]);
};

const updateChamp = async (root, args, context, info) => {};

module.exports = {
  champ,
  champs,
  createChamp,
  updateChamp,
};
