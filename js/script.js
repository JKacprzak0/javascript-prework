//const functionName = function(params){}

const buttonClicked = function(argButtonName){
  let randomNumber,  computerMove, playerMove;
  clearMessages();  //
  console.log(argButtonName + ' został kliknięty');
  playerMove = argButtonName;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

const getMoveName = function(argMoveId){
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3){
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

//function displayResult(argPlayerMove, argComputerMove) {
const displayResult = function(argPlayerMove, argComputerMove){
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
    printMessage('Wygrywasz!');
  } else if (argPlayerMove ==  argComputerMove){
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

let buttonRock,
  buttonScissors,
  buttonPaper;

buttonRock = document.getElementById('button-rock'); //query selector all i po klasach i id
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); }); //spr events

buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });