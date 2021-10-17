const Problem = require('../../models/schema/problem');
// QUERY
const problem = async (root, { _id }) => {
  return prepare(await Problem.findOne(ObjectId(_id)));
};

const problems = async () => {
  return (await Problem.find({}).toArray()).map(prepare);
};

// MUTATION
const createProblem = async (root, args, context, info) => {
  const res = await Problem.insertOne(args);
  return prepare(res.ops[0]);
};

const updateProblem = async (root, args, context, info) => {};

module.exports = {
  problem,
  problems,
  createProblem,
  updateProblem,
};
