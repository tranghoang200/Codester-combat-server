const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema(
  {
    _id: { type: Schema.ObjectId, auto: true },
    name: { type: String, required: true, trim: true },
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true,
    //   lowercase: true,
    // },
    // password: { type: String, required: true },
    rank: { type: ObjectId, ref: 'Rank' },
    points: { type: Number, default: 0 },
    // system generated
    createdAt: {
      type: Number,
      required: true,
      default: Date.now,
    },
    updatedAt: { type: Number },
  },
  { usePushEach: true },
  { runSettersOnQuery: true }
);

function hashPassword(password) {
  const saltRounds = 5;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

userSchema.pre('save', function (next) {
  const user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();
  user.updatedAt = Date.now();
  user.password = hashPassword(user.password);
  next();
});

userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password);
};

userSchema.methods.safeObject = function () {
  const safeFields = ['_id', 'name', 'email', 'createdAt', 'updatedAt'];
  const newSafeObject = {};
  safeFields.forEach((elem) => {
    // eslint-disable-next-line security/detect-object-injection
    newSafeObject[elem] = this[elem];
  });
  return newSafeObject;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
