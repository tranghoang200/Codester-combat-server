const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const problemSchema = new Schema({
  id: { type: ObjectId },
  content: { type: String, required: true },
  rank: { type: ObjectId, ref: 'Rank' },
  testCase: {
    input: { type: String },
    output: { type: String },
  },

  // system generated
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: { type: Date },
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;
