const express = require("express");
const router = express.Router();
const debug = require("debug")("server:auth");
const User = require("../models/User");
const Game = require("../models/Game");
const Question = require("../models/Question");
const TYPES = require("../models/questions_types");

router.post("/newGame", (req, res, next) => {
  var gameQuestionsId = [];
  const numQuestions = 2;

  const gameQuestions = TYPES.map(element => {
    return Question.find({ category: element }).limit(numQuestions)
  });

  Promise.all(gameQuestions).then(questions=>{
    for (let i=0; i< questions.length; i++) {
      for (let j = 0; j < numQuestions; j++) {
        gameQuestionsId.push((questions[i][j])._id);
      }
    }
    gameQuestionsId.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    const theGame = new Game({
      questions: gameQuestionsId
    });
    return theGame.save().then(game => {
      Game.findById(game._id)
          .populate('questions')
          .then ( game => {
            console.log(game);
            res.status(200).json(game);
          })      
    });
  })
  .catch(e => console.log(e));
});

//   ).then(() => {
//     console.log("questions");
//     console.log(gameQuestions);
//     gameQuestions.sort(function(a, b) {
//       return 0.5 - Math.random();
//     });
//     gameQuestions.forEach(g => {
//       gameQuestionsId.push(g._id);
//     });
//     const theGame = new Game({
//       name,
//       questions: gameQuestionsId
//     });
//     return theGame.save().then(game => {
//       debug(`Game ${game._id} saved with the name ${game.name}`);
//       console.log("game:");
//       console.log(game);
//       res.status(200).json(game);
//     });
//   })
//   .catch(e => console.log(e));
// });

// router.get("/newGame/:category", function(req, res, next) {
//   var category = req.params.category;
//   var arrOptions = ["Question1", "Question2", "Question3"];
//   superhero = superhero0.replace("_", " ");
//   // superhero = superhero.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })
//   Question.find({ category: superhero }).exec((err, quizes) => {
//     quizes.sort(function(a, b) {
//       return 0.5 - Math.random();
//     });
//     res.render("quizSuperhero", {
//       quizes: quizes,
//       arrOptions: arrOptions,
//       superhero: superhero0
//     });
//   });
// });

// router.post("/quizSuperhero", function(req, res, next) {
//   const option1 = req.body.Question1;
//   const option2 = req.body.Question2;
//   const option3 = req.body.Question3;
//   const heroe = req.body.heroe;
//   let id = req.user._id;
//   if (
//     option1 == req.body.solution[0] &&
//     option2 == req.body.solution[1] &&
//     option3 == req.body.solution[2]
//   ) {
//     let id = req.user._id;
//     User.find({ _id: id })
//       .then(us => {
//         var certUser = us[0].certifications;
//         certUser.push(heroe);
//         return certUser;
//       })
//       .then(cert => {
//         const update = {
//           certifications: cert
//         };
//         User.findByIdAndUpdate(id, update, { new: true }, (err, usr) => {
//           if (err) {
//             return next(err);
//           }
//         });
//       })
//       .catch(e => next(e));
//     req.flash("info", "Congratulations! You got a new Certification!");
//     res.redirect(`/onlyme?id=${id}`);
//     return;
//   } else {
//     req.flash("info", "You didn't pass the quiz. Try again.");
//     res.redirect(`/quiz/${heroe}`);
//   }
// });

module.exports = router;
