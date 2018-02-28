const {dbURL} = require('dotenv').config();
const mongoose = require('mongoose');
const Question = require('../models/Question');

// mongoose.connect(dbURL).then(() => console.log("Conectado!"));
mongoose.connect('mongodb://localhost/trivial-game')
        .then(()=> console.log("Connected to DB"))
        .catch(e => console.error(e));

const questions = [
    {
      question: "¿Cuál es el nombre completo de Capitán América?",
      options: ["Steven 'Steve' Rogers", "Thor Odison", "Bruce Banner"],
      correctOption: 0,
      imgUrl: '',
      category: 'captain america'
    },
    {
      question: "Lugar de Nacimiento",
      options: ["Ohio, Estados Unidos", "Manhattan, Nueva York, Estados Unidos", "Stalingrado, URSS"],
      correctOption: 1,
      imgUrl: '',
      category: 'captain america'
    },
    {
      question: "¿A qué se dedicaba antes de ser un Vengador?",
      options: ["Científico", "Espía ruso", "Soldado profesional"],
      correctOption: 2,
      imgUrl: '',
      category: 'captain america'
    },
    {
      question: "¿Quién es el lider de los Vengadores?",
      options: ["Ultrón", "Capitán América", "Obi Wan Kenobi"],
      correctOption: 1,
      imgUrl: '',
      category: 'signUp'
    },
    {
      question: "¿Cuál es el nombre de Hulk?",
      options: ["Bruce Banner", "Nick Fury", "Peter Parker"],
      correctOption: 0,
      imgUrl: '',
      category: 'signUp'
    },
    {
      question: "¿Qué actor interpreta a Capitán América?",
      options: ["Tom Cruise", "Chris Evans", "Aaron Tailor"],
      correctOption: 1,
      imgUrl: '',
      category: 'signUp'
    },
    {
      question: "¿Qué actriz interpreta a Black Widow?",
      options: ["Natalie Portman", "Gwyneth Paltrow", "Scarlett Johansson"],
      correctOption: 2,
      imgUrl: '',
      category: 'signUp'
    },
    {
      question: "¿Qué actor interpreta a Hulk?",
      options: ["Mark Ruffalo", "Eric Bana", "Lou Ferrigno"],
      correctOption: 0,
      imgUrl: '',
      category: 'signUp'
    },
    {
      question: "¿Por qué Matt Murdock es ciego?",
      options: ["Se resbala y tira sin querer bidones de un contenido químico que le deja ciego.", "Salvando la vida de un anciano ciego que iba a ser atropellado.", "Nació ciego."],
      correctOption: 1,
      imgUrl: '',
      category: 'daredevil'
    },
    {
      question: "¿Quién es Claire?",
      options: ["Una enfermera que salva a Matt Murdock.", "La prima de Foggy Nelson.", "La secretaria de su bufete de abogados."],
      correctOption: 0,
      imgUrl: '',
      category: 'daredevil'
    },
    {
      question: "¿Quién es Stick?",
      options: ["El abuelo de Matt Murdock.", "El padre de Elektra.", "El entrenador de Matt Murdock."],
      correctOption: 2,
      imgUrl: '',
      category: 'daredevil'
    },
    {
      question: "Aunque parezca mentira Thor tenía identidad secreta. ¿Cuál era su nombre?",
      options: ["Donald J. Blake", "Martin Goodman", "Clark Kent"],
      correctOption: 0,
      imgUrl: '',
      category: 'thor'
    },
    {
      question: "¿Cómo se llama la hija que Thor tiene con Sif?",
      options: ["Torunn", "Eyra", "Helmi"],
      correctOption: 0,
      imgUrl: '',
      category: 'thor'
    },
    {
      question: "¿Cuál es uno de los poderes no tan conocidos de Thor?",
      options: ["Thor puede crear agujeros negros", "Thor habla 110 idiomas", "Thor posee un estado de furia llamado \'ira del guerrero\' que aumenta sus poderes"],
      correctOption: 2,
      imgUrl: '',
      category: 'thor'
    },
];

Question.collection.drop();

questions.forEach(q => {
    let qu = new Question(q);
    qu.save()
    .then(quiz => console.log(`Quiz  ${quiz.question}`))
    .catch(err => console.log(err));
});