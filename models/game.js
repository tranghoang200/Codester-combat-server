const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;
const timestamps = require('mongoose-timestamp');
const { composeWithMongoose } = require('graphql-compose-mongoose');

const gameSchema = new Schema(
  {
    player1: { type: ObjectId, ref: 'Player' },
    player2: { type: ObjectId, ref: 'Player' },
    testCase: {
      input: { type: String },
      output: { type: String },
    },
    rank: { type: ObjectId, ref: 'Rank' },
    problems: [{ type: ObjectId, ref: 'Problem' }],
    winner: { type: ObjectId, ref: 'User' },
  },
  { collection: 'games' }
);

gameSchema.plugin(timestamps);

gameSchema.index({ createdAt: 1, updatedAt: 1 });

const Game = mongoose.model('Game', gameSchema);
const GameTC = composeWithMongoose(Game);

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
  Game,
  GameTC,
  GameQuery,
  GameMutation,
};
