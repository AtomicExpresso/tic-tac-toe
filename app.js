const playerOneName = document.getElementById('playeronename');
const playerTwoName = document.getElementById('playertwoname');

let gameBoard = ['', '', '', '', '', '', '', '', ''];

function player(name, id) {
  return {
    name: name,
    id: id,

    getPlayer() {
      return `${name} ${id}`;
    },
  };
}

function check() {
  const topLeft = document.getElementById('top-left');
  const topCenter = document.getElementById('top-center');
  const topRight = document.getElementById('top-right');

  let playerOneTurn = true;

  topLeft.addEventListener('click', function () {
    console.log('top');
    if (topLeft.innerText === '' && playerOneTurn) {
      topLeft.innerText = 'X';
      playerOneTurn = false;
      
      gameBoard[0] = 'x'
    } else if (topLeft.innerText === '' && !playerOneTurn) {
      topLeft.innerText = 'O';
      playerOneTurn = true;
      
      gameBoard[0] = 'o'
    }
  });

  topCenter.addEventListener('click', function () {
    console.log('hi');
    if (topCenter.innerText === '' && playerOneTurn) {
      topCenter.innerText = 'X';
      playerOneTurn = false;

      gameBoard[1] = 'x'
    } else if (topCenter.innerText === '' && !playerOneTurn) {
      topCenter.innerText = 'O';
      playerOneTurn = true;

      gameBoard[1] = 'o'
    }
  });

  topRight.addEventListener('click', function () {
    console.log('top');
    if (topRight.innerText === '' && playerOneTurn) {
      topRight.innerText = 'X';
      playerOneTurn = false;

      gameBoard[2] = 'x'
    } else if (topRight.innerText === '' && !playerOneTurn) {
      topRight.innerText = 'O';
      playerOneTurn = true;

      gameBoard[2] = 'o'
    }
  });
  
  checkWin();
}

function checkWin(){
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== ''){
    console.log('holy shizzle!');
  }
}

let p1 = player(playerOneName.value, 'x');
let p2 = player(playerTwoName.value, 'o');