//=========================================================
// Known issues
// 1. For somereason its not setting the input fields value for the players name

const gameContainer = document.getElementById('container');
let titleText = document.getElementById('title-text');
const playerOneName = document.getElementById('playeronename');
const playerTwoName = document.getElementById('playertwoname');

gameContainer.style.display = 'none';
let gameBoard = ['', '', '', '', '', '', '', '', '']; //Game board's array, each string represents a square on the grid
let gameOver = false; //Used to prevent moves after the game has finished
let replay = false;

function player(name, id) { //Factory function, used for player names and their id
  return {
    name: name,
    id: id,

    getPlayer() {
      return `${name} ${id}`;
    },
  };
}

let p1 = player(`${playerOneName.value}`, 'x');
let p2 = player(`${playerTwoName.value}`, 'o');

//===Start game===
document.getElementById('start').addEventListener('click', function() {
  gameContainer.style.display = 'flex';
  document.getElementById('start').style.display = 'none';

  if(replay){
    let boxes = document.getElementsByClassName('box');
    for (let box of boxes) {
      box.innerText = ''; // Clear text content of each box
    }
    titleText.innerText = 'Welcome';
    titleText.style.color = 'black';
    gameOver = false;
  }
});
//===Game function===
function check() {
  const topLeft = document.getElementById('top-left');
  const topCenter = document.getElementById('top-center');
  const topRight = document.getElementById('top-right');
  const centerLeft = document.getElementById('center-left');
  const center = document.getElementById('center');
  const centerRight = document.getElementById('center-right');
  const bottomLeft = document.getElementById('bottom-left');
  const bottomCenter = document.getElementById('bottom-center');
  const bottomRight = document.getElementById('bottom-right');

  let playerOneTurn = true;
  gameContainer.style.display = 'flex';
  document.getElementById('start').innerText = 'Play'; //Changes text from "Play again?" back to play

  topLeft.addEventListener('click', function () {
    if (topLeft.innerText === '' && playerOneTurn && !gameOver) {
      topLeft.innerText = p1.id;
      titleText.innerText = `Player 2's turn`;
      playerOneTurn = false;
      gameBoard[0] = p1.id;
    } else if (topLeft.innerText === '' && !playerOneTurn && !gameOver) {
      topLeft.innerText = p2.id;
      titleText.innerText = `Player 1's turn`;
      playerOneTurn = true;
      gameBoard[0] = p2.id;
    }
  });

  topCenter.addEventListener('click', function () {
    if (topCenter.innerText === '' && playerOneTurn && !gameOver) {
      topCenter.innerText = p1.id;
      titleText.innerText = `Player 2's turn`;
      playerOneTurn = false;
      gameBoard[1] = p1.id;
    } else if (topCenter.innerText === '' && !playerOneTurn && !gameOver) {
      topCenter.innerText = p2.id;
      titleText.innerText = `Player 1's turn`;
      playerOneTurn = true;
      gameBoard[1] = p2.id;
    }
  });

  topRight.addEventListener('click', function () {
    if (topRight.innerText === '' && playerOneTurn && !gameOver) {
      topRight.innerText = p1.id;
      titleText.innerText = `Player 2's turn`;
      playerOneTurn = false;
      gameBoard[2] = p1.id;
    } else if (topRight.innerText === '' && !playerOneTurn && !gameOver) {
      topRight.innerText = p2.id;
      titleText.innerText = `Player 1's turn`;
      playerOneTurn = true;
      gameBoard[2] = p2.id;
    }
  });

  centerLeft.addEventListener('click', function () {
    if (centerLeft.innerText === '' && playerOneTurn && !gameOver) {
      centerLeft.innerText = p1.id;
      titleText.innerText = `Player 2's turn`;
      playerOneTurn = false;
      gameBoard[3] = p1.id;
    } else if (centerLeft.innerText === '' && !playerOneTurn && !gameOver) {
      centerLeft.innerText = p2.id;
      titleText.innerText = `Player 1's turn`;
      playerOneTurn = true;
      gameBoard[3] = p2.id;
    }
  });

  center.addEventListener('click', function () {
    if (center.innerText === '' && playerOneTurn && !gameOver) {
      center.innerText = p1.id;
      titleText.innerText = `Player 2's turn`;
      playerOneTurn = false;
      gameBoard[4] = p1.id;
    } else if (center.innerText === '' && !playerOneTurn && !gameOver) {
      center.innerText = p2.id;
      titleText.innerText = `Player 1's turn`;
      playerOneTurn = true;
      gameBoard[4] = p2.id;
    }
  });

  centerRight.addEventListener('click', function () {
    if (centerRight.innerText === '' && playerOneTurn && !gameOver) {
      centerRight.innerText = p1.id;
      titleText.innerText = `Player 2's turn`;
      playerOneTurn = false;
      gameBoard[5] = p1.id;
    } else if (centerRight.innerText === '' && !playerOneTurn && !gameOver) {
      centerRight.innerText = p2.id;
      titleText.innerText = `Player 1's turn`;
      playerOneTurn = true;
      gameBoard[5] = p2.id;
    }
  });

  bottomLeft.addEventListener('click', function () {
    if (bottomLeft.innerText === '' && playerOneTurn && !gameOver) {
      bottomLeft.innerText = p1.id;
      titleText.innerText = `Player 2's turn`;
      playerOneTurn = false;
      gameBoard[6] = p1.id;
    } else if (bottomLeft.innerText === '' && !playerOneTurn && !gameOver) {
      bottomLeft.innerText = p2.id;
      titleText.innerText = `Player 1's turn`;
      playerOneTurn = true;
      gameBoard[6] = p2.id;
    }
  });

  bottomCenter.addEventListener('click', function () {
    if (bottomCenter.innerText === '' && playerOneTurn && !gameOver) {
      bottomCenter.innerText = p1.id;
      playerOneTurn = false;
      gameBoard[7] = p1.id;
      titleText.innerText = `Player 2's turn`;
    } else if (bottomCenter.innerText === '' && !playerOneTurn && !gameOver) {
      bottomCenter.innerText = p2.id;
      playerOneTurn = true;
      gameBoard[7] = p2.id;
    }
  });

  bottomRight.addEventListener('click', function () {
    if (bottomRight.innerText === '' && playerOneTurn && !gameOver) {
      bottomRight.innerText = p1.id;
      titleText.innerText = `Player 2's turn`;
      playerOneTurn = false;
      gameBoard[8] = p1.id;
    } else if (bottomRight.innerText === '' && !playerOneTurn && !gameOver) {
      bottomRight.innerText = p2.id;
      titleText.innerText = `Player 1's turn`;
      playerOneTurn = true;
      gameBoard[8] = p2.id;
    }
  });

  checkWin();
}

//====Win condition====
function checkWin() {
  //col-1
  if (gameBoard[0] === gameBoard[1] &&gameBoard[1] === gameBoard[2] &&gameBoard[0] !== '') {
    if (gameBoard[0] === gameBoard[1] &&gameBoard[1] === gameBoard[2] &&gameBoard[0] === 'x') {
      xWon();
    } else {(gameBoard[0] === gameBoard[1] &&gameBoard[1] === gameBoard[2] &&gameBoard[0] === 'o')
      oWon();
    } 
  }
  //col-2
  else if (gameBoard[3] === gameBoard[4] &&gameBoard[3] === gameBoard[5] &&gameBoard[3] !== '') {
    if (gameBoard[3] === gameBoard[4] &&gameBoard[3] === gameBoard[5] &&gameBoard[3] === 'x') {
      xWon();
    } else {(gameBoard[3] === gameBoard[4] &&gameBoard[3] === gameBoard[4] &&gameBoard[3] === 'o')
      oWon();
    } 
  }
  //col-3
  else if (gameBoard[6] === gameBoard[7] &&gameBoard[7] === gameBoard[8] &&gameBoard[6] !== '') {
    if (gameBoard[6] === gameBoard[7] &&gameBoard[7] === gameBoard[8] &&gameBoard[6] === 'x') {
      xWon();
    } else {(gameBoard[6] === gameBoard[7] &&gameBoard[7] === gameBoard[8] &&gameBoard[6] === 'o')
      oWon();
    } 
  }
  //row-1
  else if (gameBoard[0] === gameBoard[3] && (gameBoard[3] === gameBoard[6]) && gameBoard[0] !== '') {
    if (gameBoard[0] === gameBoard[3] &&gameBoard[3] === gameBoard[6] &&gameBoard[0] === 'x') {
      xWon();
    } else {(gameBoard[0] === gameBoard[3] &&gameBoard[3] === gameBoard[6] &&gameBoard[0] === 'o')
      oWon();
    } 
  }
  //row-2
  else if ( gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] !== '') {
    if (gameBoard[1] === gameBoard[4] &&gameBoard[4] === gameBoard[7] &&gameBoard[1] === 'x') {
      xWon();
    } else {(gameBoard[1] === gameBoard[4] &&gameBoard[4] === gameBoard[7] &&gameBoard[1] === 'o')
      oWon();
    } 
  }
  //row-3
  else if ( gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== '') {
    if (gameBoard[2] === gameBoard[5] &&gameBoard[5] === gameBoard[8] &&gameBoard[2] === 'x') {
      xWon();
    } else {(gameBoard[2] === gameBoard[5] &&gameBoard[5] === gameBoard[8] &&gameBoard[2] === 'o')
      oWon();
    } 
  }
  //Diangle-1
  else if ( gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== '') {
    if (gameBoard[0] === gameBoard[4] &&gameBoard[4] === gameBoard[8] &&gameBoard[0] === 'x') {
      xWon();
    } else {(gameBoard[0] === gameBoard[4] &&gameBoard[4] === gameBoard[8] &&gameBoard[0] === 'o')
      oWon();
    } 
  }
  //Diangle-2
  else if ( gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== '') {
    if (gameBoard[2] === gameBoard[4] &&gameBoard[4] === gameBoard[6] &&gameBoard[2] === 'x') {
      xWon();
    } else {(gameBoard[2] === gameBoard[4] &&gameBoard[4] === gameBoard[6] &&gameBoard[2] === 'o')
      oWon();
    } 
  } 

  function xWon() { //Player one (or x) has won the game
    document.getElementById('start').style.display = 'flex'; //for the "play again" button
    document.getElementById('start').innerText = 'Play again?';

    console.log(`${p1.id} won`);
    titleText.innerText = `${p1.id} won!`;
    titleText.style.color = 'green';
    replay = true;
    gameOver = true;
    gameBoard = ['', '', '', '', '', '', '', '', '']; //resets the array
  }
  function oWon() { //Player two (or O) has won the game
    document.getElementById('start').style.display = 'flex'; //for the "play again" button
    document.getElementById('start').innerText = 'Play again?';

    console.log(`${p2.id} won`);
    titleText.innerText = `${p2.id} won!`
    titleText.style.color = 'blue';
    gameOver = true;
    replay = true;
    gameBoard = ['', '', '', '', '', '', '', '', '']; //resets the array
  }
}
//=========================================================
