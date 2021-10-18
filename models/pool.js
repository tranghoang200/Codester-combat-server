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

const Player = mongoose.model('Player', poolSchema);
const PlayerTC = composeWithMongoose(Player);

module.exports = {
  Player,
  PlayerTC,
};
