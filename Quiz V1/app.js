function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

// function showScores() {
//     var gameOverHTML = "<h1>Result</h1>";
//     gameOverHTML += "<h2 id='score'> Your score is: " + quiz.score + "</h2>";
//     var element = document.getElementById("quiz");
//     element.innerHTML = gameOverHTML;
// };

function showScores() {
    if (typeof(Storage) !== "undefined") {
        // Store
        var gameOverHTML = "<h1>Congratulations!!!</h1>";
        
        localStorage.setItem("score", quiz.score);
        var qscore =  localStorage.getItem("score");
        gameOverHTML += "<h2 id='score'> Your score is: " + qscore + "</h2>";
        var element = document.getElementById("quiz");
        element.innerHTML = gameOverHTML;


        
      } else {
        document.getElementById("quiz").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
};
// create questions
var questions = [
    new Question("Which was the first movie to win Oscar Award?", ["Sholay", "Lagaan","Mother India", "Gandhi"], "Gandhi"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
    new Question("Which language can be used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("Internet Explorer 6 was released in", ["1990", "2006", "1999", "2003"], "2006"),
    new Question("JS in html stands for??", ["Jaya Surya", "Java Set", "Java Script", "JavaScripted"], "Java Script"),
    new Question("Who is the first Indian to win an Oscar", ["Bhanu Athaiya", "A R Rehman", "Satyajit", "Rajesh kapoor"], "Bhanu Athaiya"),
    new Question("Which of the following are primitive data types in JavaScript?", ["String", "Number", "Boolean", "All"], "All"),
    new Question("Objects are mutable and stored by reference", ["True", "False","0","Don't know"], "True"),
    new Question("What do media queries allow us to do", ["Do responsive design", "Use different CSS based on screen size", "Stream video on our site", "None"], "Use different CSS based on screen size")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





