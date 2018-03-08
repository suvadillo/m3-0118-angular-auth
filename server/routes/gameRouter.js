const express = require("express");
const router = express.Router();
const debug = require("debug")("server:auth");
const User = require("../models/User");
const Game = require("../models/Game");
const Question = require("../models/Question");
const TYPES = require("../models/questions_types");
var _ = require('lodash');

router.get('/', (req, res, next) => {
  Game
    .find({status: 'ready'})
    .populate('creator')
    .populate('players')
    .populate('questions')
    .exec( (err, games) => {
      if (err) { return res.status(500).json(err); }
      return res.status(200).json(games);
    });
});

router.post("/newGame", (req, res, next) => {
  var x = [];
  var gameQuestionsId = [];
  const {name, userId, numQ} = req.body;
  const numQuestions = numQ;
  const gameQuestions = TYPES.map(element => {
    return Question.find({ category: element }).limit(numQuestions)
  });

  Promise.all(gameQuestions).then(questions => {
    x = [].concat.apply([], questions)
    gameQuestionsId = x.map(e => {return e._id});
    
    gameQuestionsId.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    var players = [];
    players.push(userId);
    const theGame = new Game({
      questions: gameQuestionsId,
      name: name,
      creator: userId,
      players: players
    });
    return theGame.save().then(game => {
      Game.findById(game._id)
          .populate('creator')
          .populate('players')
          .populate('questions')
          .then ( game => {
            res.status(200).json(game);
          })      
    });
  })
  .catch(e => console.log(e));
});

router.post('/:id', (req,res, next) => {
  const newRanking = {user: req.body.user, score: req.body.userScore};

  Game.findOneAndUpdate({_id:req.params.id},{ $push: { ranking: newRanking } },{new:true})
    .populate('creator')
    .populate('players')
    .populate('questions')
    .then(game => {
      res.json(game)
    })
    .catch(err=>res.json(err))
})

router.put('/:id', (req,res, next) => {
  const {gameStatus, player} = req.body;
  console.log('player');
  console.log(player);

  Game.findById(req.params.id)
    .populate('creator')
    .populate('players')
    .populate('questions')
    .exec((err, game) => {
      if (err) { return res.status(500).json(err); }
      if (!game) { return res.status(404).json(err); }

      if(gameStatus) game.status = gameStatus;
      if(player) game.players.push(player); 

      game.save( (err) => {
        if (err) { return res.status(500).json(err); }
        if (game.errors){ return res.status(400).json(game); }

        return res.status(200).json(game);
      });
  });
})

module.exports = router;
