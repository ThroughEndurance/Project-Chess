const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  content: {
    type: String, 
    },
  rating: {
    type: Number,
    min: 1,
    max: 10
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
  notes: [noteSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);