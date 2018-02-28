const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const gameSchema = new Schema({
  name: {type: String, default: 'Trivial-Game' },
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  timeToAnswer: {type: Number, default: 15000},
  status: {type: String, enum: ['ready', 'started', 'finished']},
  players: [{ type: Schema.Types.ObjectId, ref: 'User' }],  
  ranking: [{
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    score: Number
  }]
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;