const mongoose = require('mongoose');
const { Schema } = mongoose;
const timestamps = require('mongoose-timestamp');
const { composeWithMongoose } = require('graphql-compose-mongoose');

const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    rank: { type: ObjectId, ref: 'Rank' },
    points: { type: Number, default: 0 },
  },
  { collection: 'users' }
);

userSchema.plugin(timestamps);

userSchema.index({ createdAt: 1, updatedAt: 1 });

const User = mongoose.model('User', userSchema);
const UserTC = composeWithMongoose(User);

module.exports = {
  User,
  UserTC,
};
