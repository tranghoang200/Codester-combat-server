const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const gameSchema = new Schema({
  id: { type: ObjectId },
  player1: { type: ObjectId, ref: 'Player' },
  player2: { type: ObjectId, ref: 'Player' },
  testCase: {
    input: { type: String },
    output: { type: String },
  },
  rank: { type: ObjectId, ref: 'Rank' },
  problems: [{ type: ObjectId, ref: 'Problem' }],
  winner: { type: ObjectId, ref: 'User' },
  // system generated
  createdAt: {
    type: Number,
    required: true,
    default: Date.now,
  },
  updatedAt: { type: Number },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
