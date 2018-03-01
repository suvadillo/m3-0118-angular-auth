const express = require("express");
const router = express.Router();
const debug = require("debug")("server:auth");
const User = require("../models/User");
const Game = require("../models/Game");
// const Question = require("../models/Question");

module.exports = io => {
  io.on("connection", socket => {
    console.log("a user connected");
    socket.on("chat-ready", m => {
      console.log(m);
      socket.broadcast.emit("chat", m);
    });

    socket.on("start-game", data => {
      Game.findById(data.gameId)
        .populate("questions")
        .then(game => {
          m = {message: 'startgame test'};
          io.emit('start-game', game)
          // socket.broadcast.emit('start-game', m);
          // socket.emit('start-game', m);
        });
    });
  });
};
