const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;
const timestamps = require('mongoose-timestamp');
const { composeWithMongoose } = require('graphql-compose-mongoose');

const poolSchema = new Schema(
  {
    user: { type: ObjectId, ref: 'User' },
    champ: { type: ObjectId, ref: 'Champ' },
    problems: [{ type: ObjectId, ref: 'Problem' }],
    updatedAt: { type: Number, default: 100 },
  },
  { collection: 'pools' }
);

poolSchema.plugin(timestamps);

poolSchema.index({ createdAt: 1, updatedAt: 1 });

const Pool = mongoose.model('Pool', poolSchema);
const PoolTC = composeWithMongoose(Pool);

const PoolQuery = {
  playerById: PoolTC.getResolver('findById'),
  playerByIds: PoolTC.getResolver('findByIds'),
  playerOne: PoolTC.getResolver('findOne'),
  playerMany: PoolTC.getResolver('findMany'),
  playerCount: PoolTC.getResolver('count'),
  playerConnection: PoolTC.getResolver('connection'),
  PoolPagination: PoolTC.getResolver('pagination'),
};

const PoolMutation = {
  playerCreateOne: PoolTC.getResolver('createOne'),
  playerCreateMany: PoolTC.getResolver('createMany'),
  playerUpdateById: PoolTC.getResolver('updateById'),
  playerUpdateOne: PoolTC.getResolver('updateOne'),
  playerUpdateMany: PoolTC.getResolver('updateMany'),
  playerRemoveById: PoolTC.getResolver('removeById'),
  playerRemoveOne: PoolTC.getResolver('removeOne'),
  playerRemoveMany: PoolTC.getResolver('removeMany'),
};

module.exports = {
  Pool,
  PoolTC,
  PoolMutation,
  PoolQuery,
};
