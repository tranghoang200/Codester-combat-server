const { Champ, ChampTC } = require('../models/Champ');

const ChampQuery = {
  champById: ChampTC.getResolver('findById'),
  champByIds: ChampTC.getResolver('findByIds'),
  champOne: ChampTC.getResolver('findOne'),
  champMany: ChampTC.getResolver('findMany'),
  champCount: ChampTC.getResolver('count'),
  champConnection: ChampTC.getResolver('connection'),
  champPagination: ChampTC.getResolver('pagination'),
};

const ChampMutation = {
  champCreateOne: ChampTC.getResolver('createOne'),
  champCreateMany: ChampTC.getResolver('createMany'),
  champUpdateById: ChampTC.getResolver('updateById'),
  champUpdateOne: ChampTC.getResolver('updateOne'),
  champUpdateMany: ChampTC.getResolver('updateMany'),
  champRemoveById: ChampTC.getResolver('removeById'),
  champRemoveOne: ChampTC.getResolver('removeOne'),
  champRemoveMany: ChampTC.getResolver('removeMany'),
};

module.exports = {
  ChampQuery,
  ChampMutation,
};
