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
    required: true
  },
  PlayerColor: {
    type: String,
    required: true 
  },
  PlayerRank: {
    type: Number,
    required: true
  },
  OpponentRank: {
    type: Number,
    required: true
  },
  Opening: {
    type: String,
    required: true
  },
  GameLink: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);