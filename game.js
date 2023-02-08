const scoreCounter = document.querySelector("#score");
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const reset = document.querySelector('#reset');
let playerScore = 0;
let computerScore = 0;
function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    return options[~~(Math.random() * options.length)];
}
function playRound (playerChoice, computerChoice) {
    const options = {
        rock: {weakTo: "paper", strongTo: "scissors"},
        paper: {weakTo: "scissors", strongTo: "rock"},
        scissors: {weakTo: "rock", strongTo: "paper"}
    }
    if (options[playerChoice].strongTo === computerChoice) {
        return changeScore('player');
    }
    return changeScore('computer');
};

function changeScore(winner){
    if (winner === 'player') {
        playerScore++;
    } else {
        computerScore++;
    };
    scoreCounter.textContent = `Player - ${playerScore} | Computer - ${computerScore}`;
    if (playerScore === 5){
        resetGame('Player');
    }else if (computerScore === 5){
        resetGame('Computer')
    };
};

function resetGame(winner){
    if (winner === "Player") {
        scoreCounter.textContent = "Player wins!";
    } else {
        scoreCounter.textContent = "Computer wins!";
    }
    reset.classList.toggle('inactive');
    rock.classList.toggle('inactive');
    paper.classList.toggle('inactive');
    scissors.classList.toggle('inactive');
};
rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});
paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});
scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});
reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    scoreCounter.textContent = "Player - 0 | Computer - 0"
    rock.classList.toggle('inactive');
    paper.classList.toggle('inactive');
    scissors.classList.toggle('inactive');
    reset.classList.toggle('inactive');
})