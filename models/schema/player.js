const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const playerSchema = new Schema({
  id: { type: ObjectId },
  userId: { type: ObjectId, ref: 'User' },
  champ: { type: String, ref: 'Champ' },
  problems: [{ type: ObjectId, ref: 'Problem' }],

  // system generated
  createdAt: {
    type: Number,
    required: true,
    default: Date.now,
  },
  updatedAt: { type: Number },
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
