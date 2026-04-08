document.addEventListener('DOMContentLoaded', () => {

const gameGrid = document.querySelector('.game-grid');
const SIZE = 4;

let board = [];

let currentScore = 0;

const currentScoreElem = document.querySelector('.current-score');
const hightScoreElem = document.querySelector('.high-score');

let hightScore = localStorage.getItem('2048-highScore') || 0;

hightScoreElem.textContent = hightScore;

const gameOverElem = document.querySelector('.game-over');


function updateScore(value) {
    currentScore += value;
    currentScoreElem.textContent = currentScore;

    if (currentScore > hightScore) {
        hightScore = currentScore;
        hightScoreElem.textContent = hightScore;
        localStorage.setInterval('2048-highScore', high-Score);
    }
}

function restartGame(){
    currentScore = 0;
    currentScore.textContent = '0';
    gameOverElem.style.display = 'none';
    initializeGame();
}

function initializeGame() {
    board = [...Array(SIZE)].map(() => Array(SIZE).fill(0));

    placeRandom();
    placeRandom();

    randerBoard();

}

function randerBoard() {
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        const cell = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
        const prevValue = cell.dataset.value;
        const currentValue = board[i][j];


        if (currentValue !== 0) {
            cell.dataset.value = currentValue;
            cell.textContent = currentValue;

            if (currentValue !== parseInt(prevValue) && !cell.classList.contains('new-tile') ) {
                cell.classList.add('merged-tile')
            }


        }else {
            cell.textContent = '';
            delete cell.dataset.value; 
            cell.classList.remove('merged-tile', 'new-tile');
        }
    }    
   }
}









});