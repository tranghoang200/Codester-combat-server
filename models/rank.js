const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;
const timestamps = require('mongoose-timestamp');
const { composeWithMongoose } = require('graphql-compose-mongoose');

const rankSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
  },
  { collection: 'ranks' }
);

rankSchema.plugin(timestamps);

rankSchema.index({ createdAt: 1, updatedAt: 1 });

const Rank = mongoose.model('Rank', rankSchema);
const RankTC = composeWithMongoose(Rank);

module.exports = {
  Rank,
  RankTC,
};
