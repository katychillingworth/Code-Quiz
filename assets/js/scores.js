// Variables for data retrieval from Local Storage
var highScore = JSON.parse(localStorage.getItem("score")) || [];

highScore.sort(function (a, b) {
    return b.score - a.score;
});

function clearHighScore() {
    highScore = [];
    localStorage.setItem("highscores", JSON.stringify(highScore));
}


