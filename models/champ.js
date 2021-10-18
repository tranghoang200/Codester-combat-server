const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;
const timestamps = require('mongoose-timestamp');
const { composeWithMongoose } = require('graphql-compose-mongoose');

const champSchema = new Schema(
  {
    name: { type: String, required: true },
    rank: { type: ObjectId, ref: 'Rank' },
    testCase: {
      input: { type: String },
      output: { type: String },
    },
    skill1: { type: Number },
    skill2: { type: Number },
    heal: { type: Number },
    shield: { type: Number },
  },
  { collection: 'champs' }
);

champSchema.plugin(timestamps);

champSchema.index({ createdAt: 1, updatedAt: 1 });

const Champ = mongoose.model('Champ', champSchema);
const ChampTC = composeWithMongoose(Champ);

module.exports = {
  Champ,
  ChampTC,
};
