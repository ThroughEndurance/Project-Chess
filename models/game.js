const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {type: String, required: true},
  rating: {type: Number, min: 1, max: 5, default: 5},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
  userAvatar: String
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
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);