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

    // finding game in DDBB & sending it through socket to all
    socket.on("get-game", data => {
      Game.findById(data.gameId)
        .populate('questions')
        .populate('players')
        .populate('creator')
        .then(game => {
          io.emit('sending-game', game)
          //socket.broadcast.emit('sending-game', game);
          //socket.emit('sending-game', game);
        });
    });

    // getting & resending next question to all users
    socket.on("send-question", gameStatus => {
      io.emit("resend-question", gameStatus);
    });

    // getting & resending result of the game to all users
    socket.on("end-game", data => {
      io.emit("ranking-game", data);
    });
  });
};
