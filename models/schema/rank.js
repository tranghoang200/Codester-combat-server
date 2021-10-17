const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const rankSchema = new Schema({
  id: { type: ObjectId },
  name: { type: String, required: true, trim: true },
  // system generated
  createdAt: {
    type: Number,
    required: true,
    default: Date.now,
  },
  updatedAt: { type: Number },
});

const Rank = mongoose.model('Rank', rankSchema);

module.exports = Rank;
