const { Problem, ProblemTC } = require('../models/Problem');

const ProblemQuery = {
  problemById: ProblemTC.getResolver('findById'),
  problemByIds: ProblemTC.getResolver('findByIds'),
  problemOne: ProblemTC.getResolver('findOne'),
  problemMany: ProblemTC.getResolver('findMany'),
  problemCount: ProblemTC.getResolver('count'),
  problemConnection: ProblemTC.getResolver('connection'),
  ProblemPagination: ProblemTC.getResolver('pagination'),
};

const ProblemMutation = {
  problemCreateOne: ProblemTC.getResolver('createOne'),
  problemCreateMany: ProblemTC.getResolver('createMany'),
  problemUpdateById: ProblemTC.getResolver('updateById'),
  problemUpdateOne: ProblemTC.getResolver('updateOne'),
  problemUpdateMany: ProblemTC.getResolver('updateMany'),
  problemRemoveById: ProblemTC.getResolver('removeById'),
  problemRemoveOne: ProblemTC.getResolver('removeOne'),
  problemRemoveMany: ProblemTC.getResolver('removeMany'),
};

module.exports = {
  ProblemQuery,
  ProblemMutation,
};
