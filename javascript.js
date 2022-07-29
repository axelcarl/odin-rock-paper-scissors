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



function game(playSel) {
    let compSel = getComputerChoice();
    let round = playRound(playSel, compSel);
    return round;
}

let gameStarted = false;
let gameScreen = document.getElementById('active');
let startScreen = document.getElementById('start');

let startText = startScreen.querySelector('.start-text')
startText.addEventListener('click', () => {
  gameStarted = true;
  checkState();
});

let message;

function checkState() {
if (gameStarted) {
  document.querySelector('.score').innerHTML = '';
  message = '';
  gameScreen.style.display = 'flex';
  startScreen.style.display = 'none';

  rock = document.getElementById('rock');
  rock.addEventListener('click', () => {
    message = game('rock');
    document.querySelector('.score').innerHTML = '';
    document.querySelector('.score').append(message)
    gameStarted = false;
    checkState();
  })
  paper = document.getElementById('paper');
  paper.addEventListener('click', () => {
    message = game('paper');
    document.querySelector('.score').innerHTML = '';
    document.querySelector('.score').append(message)
    gameStarted = false;
    checkState();
  })
  scissors = document.getElementById('scissors');
  scissors.addEventListener('click', () => {
    message = game('scissors');
    document.querySelector('.score').innerHTML = '';
    document.querySelector('.score').append(message)
    gameStarted = false;
    checkState();
  })
} else {
  gameScreen.style.display = 'none';
  startScreen.style.display = 'flex';
  
}}

checkState();


