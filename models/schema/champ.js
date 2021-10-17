const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const champSchema = new Schema({
  id: { type: ObjectId },
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
  // system generated
  createdAt: {
    type: Number,
    required: true,
    default: Date.now,
  },
  updatedAt: { type: Number },
});

const Champ = mongoose.model('Champ', champSchema);

module.exports = Champ;
