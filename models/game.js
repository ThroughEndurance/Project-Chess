const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  content: {
    type: String, 
    },
}, {
  timestamps: true
});

const gameSchema = new Schema({
  WinOrLoss: {
    type: String,
  },
  PlayerColor: {
    type: String,
  },
  PlayerRank: {
    type: Number,
  },
  OpponentRank: {
    type: Number,
  },
  Opening: {
    type: String,
  },
  GameLink: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId, ref: 'User', required: true
  },
  userName: String,
  userAvatar: String,
  notes: [noteSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);