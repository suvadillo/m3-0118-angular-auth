const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const gameSchema = new Schema({
  name: {type: String, default: 'Trivial-Game' },
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  timeToAnswer: {type: Number, default: 15000},
  timeToStart: {type: Number, default: 60000},
  status: {type: String, enum: ['ready', 'started', 'finished'], default: 'ready'},
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
  players: [{ type: Schema.Types.ObjectId, ref: 'User' }],  
  ranking: [{
    user: String,
    score: Number
  }]
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;