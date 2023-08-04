const username = document.getElementById("username");
const scoreBtn = document.getElementById("scoreBtn");
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    scoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
    
    
    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log(highScores);
    

    window.location.assign("index.html");
};