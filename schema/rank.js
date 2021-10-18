const { Rank, RankTC } = require('../models/Rank');

const RankQuery = {
  rankById: RankTC.getResolver('findById'),
  rankByIds: RankTC.getResolver('findByIds'),
  rankOne: RankTC.getResolver('findOne'),
  rankMany: RankTC.getResolver('findMany'),
  rankCount: RankTC.getResolver('count'),
  rankConnection: RankTC.getResolver('connection'),
  RankPagination: RankTC.getResolver('pagination'),
};

const RankMutation = {
  rankCreateOne: RankTC.getResolver('createOne'),
  rankCreateMany: RankTC.getResolver('createMany'),
  rankUpdateById: RankTC.getResolver('updateById'),
  rankUpdateOne: RankTC.getResolver('updateOne'),
  rankUpdateMany: RankTC.getResolver('updateMany'),
  rankRemoveById: RankTC.getResolver('removeById'),
  rankRemoveOne: RankTC.getResolver('removeOne'),
  rankRemoveMany: RankTC.getResolver('removeMany'),
};

module.exports = {
  RankQuery,
  RankMutation,
};
