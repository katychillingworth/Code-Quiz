var timer = document.querySelector("#currentTime");
var startButton = document.querySelector("#start");
var questionList = document.querySelector("questionList");
var answersList = document.querySelector("#answersList");
var finalScore = document.querySelector("#finalScore");
var submitButton = document.querySelector("#submitButton");
var playerInfo = document.querySelector("#playerInfo");

var timeRemaining = 60;
var score = 0;

startButton.addEventListener('click', start);

function startQuiz() {
timer = setInterval(function() {
    timeRemaining--;
    timer.textContext = "Time:" + timeRemaining;

    if (timeRemaining <= 0) {
        clearInterval(timer);
        endQuiz();
    }
}, 1000);
}

