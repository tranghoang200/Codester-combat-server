const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;
const timestamps = require('mongoose-timestamp');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const { Rank } = require('./rank');

const problemSchema = new Schema(
  {
    content: { type: String, required: true },
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

ProblemTC.addResolver({
  name: 'createOne',
  type: ProblemTC.getResolver('createOne').getType(),
  args: {
    ...ProblemTC.getResolver('createOne').getArgs(),
    rank: 'String',
  },
  resolve: async ({ source, args, context, info }) => {
    console.log(args.record.input);
    const res = Problem.create({
      content: args.record.content,
      testCase: args.record.testCase,
      rank: await Rank.findOne({ name: args.rank }).exec(),
    });
    return res;
  },
});

const ProblemQuery = {
  problemById: ProblemTC.getResolver('findById'),
  problemByIds: ProblemTC.getResolver('findByIds'),
  problemOne: ProblemTC.getResolver('findOne'),
  problemMany: ProblemTC.getResolver('findMany'),
  problemCount: ProblemTC.getResolver('count'),
  problemConnection: ProblemTC.getResolver('connection'),
  ProblemPagination: ProblemTC.getResolver('pagination'),
};

const ProblemMutation = {
  problemCreateOne: ProblemTC.getResolver('createOne'),
  problemCreateMany: ProblemTC.getResolver('createMany'),
  problemUpdateById: ProblemTC.getResolver('updateById'),
  problemUpdateOne: ProblemTC.getResolver('updateOne'),
  problemUpdateMany: ProblemTC.getResolver('updateMany'),
  problemRemoveById: ProblemTC.getResolver('removeById'),
  problemRemoveOne: ProblemTC.getResolver('removeOne'),
  problemRemoveMany: ProblemTC.getResolver('removeMany'),
};

module.exports = {
  Problem,
  ProblemTC,
  ProblemQuery,
  ProblemMutation,
};
