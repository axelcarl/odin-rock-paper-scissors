function getComputerChoice() {
  let choice = Math.random();
  let s = '';
  if (choice > 0.34) {
    s = 'rock';
  }
  else if (choice > 0.67) {
    s = 'paper';
  }
  else {
    s = 'scissors';
  }
  return s;
}

function playRound(playerSelection, computerSelection) {
  let answer;
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection !== 'scissor' || playerSelection !== 'paper' || playerSelection !== 'rock')
    answer = 'You Lose, Invalid Input!'
  if (playerSelection == 'scissors' && computerSelection == 'paper')
    answer = 'You Win! Scissor beats paper';
  if (playerSelection == computerSelection)
    answer = 'Its a Draw!';
  if (playerSelection == 'scissors' && computerSelection == 'rock')
    answer = 'You Lose! Rock beats Scissors';
  if (playerSelection == 'paper' && computerSelection == 'scissors')
    answer = 'You Lose! Scissors beats Paper';
  if (playerSelection == 'paper' && computerSelection == 'rock')
    answer = 'You Win! Paper beats Rock';
  if (playerSelection == 'rock' && computerSelection == 'scissors')
    answer = 'You Win! Rock beats Scissors';
  return answer;
}



function game() {
  let playerPoints = 0;
  let computerPoints = 0;
  for (let i = 0; i < 5; i++) {
    let playSel = prompt("Type Rock, Paper or Scissors: ");
    let compSel = getComputerChoice();
    let round = playRound(playSel, compSel);
    console.log(round);
    if (round.charAt(4) == 'W')
      playerPoints
    else if (round.charAt(4) == 'L')
      computerPoints++;
  }
  if (playerPoints > computerPoints)
    console.log('Player Wins!')
  else if (computerPoints > playerPoints)
    console.log('Computer Wins!')
  else console.log('Its a Tie!')
}