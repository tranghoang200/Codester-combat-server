const { Game, GameTC } = require('../models/Game');

const GameQuery = {
  gameById: GameTC.getResolver('findById'),
  gameByIds: GameTC.getResolver('findByIds'),
  gameOne: GameTC.getResolver('findOne'),
  gameMany: GameTC.getResolver('findMany'),
  gameCount: GameTC.getResolver('count'),
  gameConnection: GameTC.getResolver('connection'),
  gamePagination: GameTC.getResolver('pagination'),
};

const GameMutation = {
  gameCreateOne: GameTC.getResolver('createOne'),
  gameCreateMany: GameTC.getResolver('createMany'),
  gameUpdateById: GameTC.getResolver('updateById'),
  gameUpdateOne: GameTC.getResolver('updateOne'),
  gameUpdateMany: GameTC.getResolver('updateMany'),
  gameRemoveById: GameTC.getResolver('removeById'),
  gameRemoveOne: GameTC.getResolver('removeOne'),
  gameRemoveMany: GameTC.getResolver('removeMany'),
};

module.exports = {
  GameQuery,
  GameMutation,
};
