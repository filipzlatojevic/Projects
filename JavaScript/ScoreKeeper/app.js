const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
let winingScoreSelect = document.querySelector('#playto');
let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');
let resetButton = document.querySelector('#reset');

let p1Score = 0;
let p2Score = 0;
let winingScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score == winingScore) {
            gameOver(p1Display, p2Display);
        }
        p1Display.innerText = p1Score;
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score == winingScore) {
            gameOver(p2Display, p1Display);
        }
        p2Display.innerText = p2Score;
    }
})

resetButton.addEventListener('click', reset);

winingScoreSelect.addEventListener('change', function () {
    reset();
    winingScore = parseInt(this.value);
});

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1Button.removeAttribute("disabled", '');
    p2Button.removeAttribute("disabled", '');
}

function gameOver(winner, loser) {
    isGameOver = true;
    winner.classList.add('has-text-success');
    loser.classList.add('has-text-danger');
    p1Button.setAttribute("disabled", '');
    p2Button.setAttribute("disabled", '');
}