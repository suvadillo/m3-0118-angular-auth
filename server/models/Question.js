const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const TYPES = require('./questions_types');

const questionSchema = new Schema({
  question: String,
  options: [{type: String}],
  imgUrl: { type: String, default: "https://placeholdit.imgix.net/~text?txtsize=50&txt=Ironfunding&w=250&h=250" },
  correctOption: Number,
  category: {type: String, enum: TYPES},
  dificulty: { type: String, default: "easy" },
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;