const scoreCounter = document.querySelector("#score");
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let playerScore = 0;
let computerScore = 0;
function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    const computerChoice = options[~~(Math.random() * options.length)];
    return computerChoice;
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
    }
    scoreCounter.textContent = `Player - ${playerScore} | Computer - ${computerScore}`;
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