const {dbURL} = require('dotenv').config();
const mongoose = require('mongoose');
const Question = require('../models/Question');

// mongoose.connect(dbURL).then(() => console.log("Conectado!"));
mongoose.connect('mongodb://localhost/trivial-game')
        .then(()=> console.log("Connected to DB"))
        .catch(e => console.error(e));

const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    correctOption: 0,
    imgUrl: 'http://wordpress1.ir/wp-content/uploads/2015/07/html-300x227.jpg',
    category: 'HTML'
  },
  {
    question: "Who is making the Web standards?",
    options: ["The World Wide Web Consortium", "Microsoft", "Google"],
    correctOption: 0,
    imgUrl: 'http://wordpress1.ir/wp-content/uploads/2015/07/html-300x227.jpg',
    category: 'HTML'
  },
  {
    question: "Which character is used to indicate an end tag?",
    options: ["*", "<", "/"],
    correctOption: 2,
    imgUrl: 'http://wordpress1.ir/wp-content/uploads/2015/07/html-300x227.jpg',
    category: 'HTML'
  },
  {
    question: "Inline elements are normally displayed without starting a new line.",
    options: ["True", "False", "None"],
    correctOption: 0,
    imgUrl: 'http://wordpress1.ir/wp-content/uploads/2015/07/html-300x227.jpg',
    category: 'HTML'
  },
  {
    question: "An <iframe> is used to display a web page within a web page.",
    options: ["True", "False", "There is no such thing as an <iframe>"],
    correctOption: 0,
    imgUrl: 'http://wordpress1.ir/wp-content/uploads/2015/07/html-300x227.jpg',
    category: 'HTML'
  },
  {
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets"],
    correctOption: 2,
    imgUrl: 'https://cdn.lynda.com/courses/609030-636443031773863386_219x389_thumb.jpg',
    category: 'CSS'
  },
  {
    question: "Where in an HTML document is the correct place to refer to an external style sheet?",
    options: ["In the <body> section", "In the <head> section", "At the end of the document"],
    correctOption: 1,
    imgUrl: 'https://cdn.lynda.com/courses/609030-636443031773863386_219x389_thumb.jpg',
    category: 'CSS'
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<script>", "<css>"],
    correctOption: 0,
    imgUrl: 'https://cdn.lynda.com/courses/609030-636443031773863386_219x389_thumb.jpg',
    category: 'CSS'
  },
  {
    question: "Which property is used to change the background color?",
    options: ["background-color", "bgcolor", "color"],
    correctOption: 0,
    imgUrl: 'https://cdn.lynda.com/courses/609030-636443031773863386_219x389_thumb.jpg',
    category: 'CSS'
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    options: ["fgcolor", "text-color", "color"],
    correctOption: 2,
    imgUrl: 'https://cdn.lynda.com/courses/609030-636443031773863386_219x389_thumb.jpg',
    category: 'CSS'
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<script>", "<scripting>"],
    correctOption: 1,
    imgUrl: 'https://4.bp.blogspot.com/-89cxeSNJWSY/WoN8Jmmqb_I/AAAAAAAAFVo/_8jxMUc6dVwkaoXQAyL3DNjkagYbLErVACLcBGAs/s320/javascript.png',
    category: 'JavaScript'
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    options: ["The <head> section", "The <body> section", "Both the <head> section and the <body> section are correct"],
    correctOption: 2,
    imgUrl: 'https://4.bp.blogspot.com/-89cxeSNJWSY/WoN8Jmmqb_I/AAAAAAAAFVo/_8jxMUc6dVwkaoXQAyL3DNjkagYbLErVACLcBGAs/s320/javascript.png',
    category: 'JavaScript'
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: ["<script name='xxx.js'>", "<script src='xxx.js'>", "<script href='xxx.js'>"],
    correctOption: 1,
    imgUrl: 'https://4.bp.blogspot.com/-89cxeSNJWSY/WoN8Jmmqb_I/AAAAAAAAFVo/_8jxMUc6dVwkaoXQAyL3DNjkagYbLErVACLcBGAs/s320/javascript.png',
    category: 'JavaScript'
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    options: ["False", "True", "None"],
    correctOption: 0,
    imgUrl: 'https://4.bp.blogspot.com/-89cxeSNJWSY/WoN8Jmmqb_I/AAAAAAAAFVo/_8jxMUc6dVwkaoXQAyL3DNjkagYbLErVACLcBGAs/s320/javascript.png',
    category: 'JavaScript'
  },
  {
    question: "JavaScript is the same as Java.",
    options: ["False", "True", "None"],
    correctOption: 0,
    imgUrl: 'https://4.bp.blogspot.com/-89cxeSNJWSY/WoN8Jmmqb_I/AAAAAAAAFVo/_8jxMUc6dVwkaoXQAyL3DNjkagYbLErVACLcBGAs/s320/javascript.png',
    category: 'JavaScript'
  },
  {
    question: "The Bootstrap grid system is based on how many columns?",
    options: ["6", "12", "9"],
    correctOption: 1,
    imgUrl: 'http://riyazahamed.in/images/responsive_bootstrap.jpg',
    category: 'Bootstrap'
  },
  {
    question: "Which class indicates a dropdown menu?",
    options: [".select", ".dropdown", ".dropdown-list"],
    correctOption: 1,
    imgUrl: 'http://riyazahamed.in/images/responsive_bootstrap.jpg',
    category: 'Bootstrap'
  },
  {
    question: "Which class is used to create a black navigation bar?",
    options: [".navbar-dark", ".navbar-black", ".navbar-inverse"],
    correctOption: 2,
    imgUrl: 'http://riyazahamed.in/images/responsive_bootstrap.jpg',
    category: 'Bootstrap'
  },
  {
    question: "Which plugin is used to create a modal window?",
    options: ["Popup", "Modal", "Dialog Box"],
    correctOption: 1,
    imgUrl: 'http://riyazahamed.in/images/responsive_bootstrap.jpg',
    category: 'Bootstrap'
  },
  {
    question: "Which plugin is used to create a tooltip?",
    options: ["Dialog Box", "Popup", "Tooltip"],
    correctOption: 2,
    imgUrl: 'http://riyazahamed.in/images/responsive_bootstrap.jpg',
    category: 'Bootstrap'
  },
  {
    question: "Which sign does jQuery use as a shortcut for jQuery?",
    options: ["the $ sign", "the ? sign", "the % sign"],
    correctOption: 0,
    imgUrl: 'http://symlinktech.com/wp-content/uploads/2017/08/jq.png',
    category: 'jQuery'
  },
  {
    question: "Which of the following is correct?",
    options: ["jQuery is a JavaScript Library", "jQuery is a JSON Library", "None"],
    correctOption: 0,
    imgUrl: 'http://symlinktech.com/wp-content/uploads/2017/08/jq.png',
    category: 'jQuery'
  },
  {
    question: "jQuery uses CSS selectors to select elements?",
    options: ["True", "False", "None"],
    correctOption: 0,
    imgUrl: 'http://symlinktech.com/wp-content/uploads/2017/08/jq.png',
    category: 'jQuery'
  },
  {
    question: "Is jQuery a library for client scripting, server scripting or none?",
    options: ["Server scripting", "Client scripting", "None"],
    correctOption: 1,
    imgUrl: 'http://symlinktech.com/wp-content/uploads/2017/08/jq.png',
    category: 'jQuery'
  },
  {
    question: "What scripting language is jQuery written in?",
    options: ["C++", "C#", "JavaScript"],
    correctOption: 2,
    imgUrl: 'http://symlinktech.com/wp-content/uploads/2017/08/jq.png',
    category: 'jQuery'
  }
];

Question.collection.drop();

questions.forEach(q => {
    let qu = new Question(q);
    qu.save()
    .then(quiz => console.log(`Quiz  ${quiz.question}`))
    .catch(err => console.log(err));
});