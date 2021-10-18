const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;
const timestamps = require('mongoose-timestamp');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const { Rank, RankTC } = require('./rank');

const poolSchema = new Schema(
  {
    user: { type: ObjectId, ref: 'User' },
    rank: { type: ObjectId, ref: 'Rank' },
  },
  { collection: 'pools' }
);

poolSchema.plugin(timestamps);

poolSchema.index({ createdAt: 1, updatedAt: 1 });

const Pool = mongoose.model('Pool', poolSchema);
const PoolTC = composeWithMongoose(Pool);

PoolTC.addResolver({
  name: 'createOne',
  type: PoolTC.getResolver('createOne').getType(),
  args: {
    ...PoolTC.getResolver('createOne').getArgs(),
    rank: 'String',
  },
  resolve: async ({ source, args, context, info }) => {
    const res = Pool.create({
      ...args.record,
      rank: await Rank.findOne({ name: args.rank }).exec(),
    });
    return res;
  },
});

PoolTC.addRelation('rank', {
  resolver: () => RankTC.getResolver('findById'),
  prepareArgs: {
    _id: (source) => source.rank || [],
  },
  projection: { rank: true },
});

const PoolQuery = {
  poolById: PoolTC.getResolver('findById'),
  poolByIds: PoolTC.getResolver('findByIds'),
  poolOne: PoolTC.getResolver('findOne'),
  poolMany: PoolTC.getResolver('findMany'),
  poolCount: PoolTC.getResolver('count'),
  poolConnection: PoolTC.getResolver('connection'),
  PoolPagination: PoolTC.getResolver('pagination'),
};

const PoolMutation = {
  poolCreateOne: PoolTC.getResolver('createOne'),
  poolCreateMany: PoolTC.getResolver('createMany'),
  poolUpdateById: PoolTC.getResolver('updateById'),
  poolUpdateOne: PoolTC.getResolver('updateOne'),
  poolUpdateMany: PoolTC.getResolver('updateMany'),
  poolRemoveById: PoolTC.getResolver('removeById'),
  poolRemoveOne: PoolTC.getResolver('removeOne'),
  poolRemoveMany: PoolTC.getResolver('removeMany'),
};

module.exports = {
  Pool,
  PoolTC,
  PoolMutation,
  PoolQuery,
};
