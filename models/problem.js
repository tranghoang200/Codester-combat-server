const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;
const timestamps = require('mongoose-timestamp');
const { composeWithMongoose } = require('graphql-compose-mongoose');

const problemSchema = new Schema(
  {
    content: { type: String, required: true, trim: true },
    rank: { type: ObjectId, ref: 'Rank' },
    testCase: {
      input: { type: String },
      output: { type: String },
    },
  },
  { collection: 'problems' }
);

problemSchema.plugin(timestamps);

problemSchema.index({ createdAt: 1, updatedAt: 1 });

const Problem = mongoose.model('Problem', problemSchema);
const ProblemTC = composeWithMongoose(Problem);

module.exports = {
  Problem,
  ProblemTC,
};
