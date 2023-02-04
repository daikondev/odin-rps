//Rock, Paper, Scissors
//Simplest way I could think is to select a random index
//Of the choice array.
const choice = ['Rock','Paper','Scissors'];
function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * choice.length);
    return choice[computerChoice]
}

function playRound(playerSelection, computerSelection){
    const options = {
        Rock: {weakTo: 'Paper', strongTo: 'Scissors'},
        Paper: {weakTo: 'Scissors', strongTo: 'Rock'},
        Scissors: {weakTo: 'Rock', strongTo: 'Paper'}
    }
    if (options[playerSelection].strongTo === computerSelection){
        return "Player wins!";
    } else {
        return "Computer wins!";
    }
}

function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++){
      let player = prompt("Rock, Paper or Scissors? (CAPITALIZED): ");
      let round = playRound(player, getComputerChoice());
      if (round === "Player wins!"){
        playerPoints++;
      }else {
        computerPoints++;
      }
    }
    if (playerPoints > computerPoints){
        return "The player has won the game."
    } else {
        return "The computer has won the game."
    }
}