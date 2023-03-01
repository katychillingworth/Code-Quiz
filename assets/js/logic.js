var answersList = document.querySelector("#answersList");
var timer = document.querySelector("#currentTime");
var startButton = document.querySelector("#start");

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

