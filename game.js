const scoreCounter = document.querySelector("#score");
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

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
        return "p W";
    }
    return "c W";
};
