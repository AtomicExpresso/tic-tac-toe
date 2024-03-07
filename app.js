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

let p1 = player(playerOneName.value, 'x');
let p2 = player(playerTwoName.value, 'o');

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

  topLeft.addEventListener('click', function () {
    console.log('top');
    if (topLeft.innerText === '' && playerOneTurn) {
      topLeft.innerText = p1.id;
      playerOneTurn = false;
      gameBoard[0] = p1.id;
    } else if (topLeft.innerText === '' && !playerOneTurn) {
      topLeft.innerText = p2.id;
      playerOneTurn = true;
      gameBoard[0] = p2.id;
    }
  });

  topCenter.addEventListener('click', function () {
    console.log('hi');
    if (topCenter.innerText === '' && playerOneTurn) {
      topCenter.innerText = p1.id;
      playerOneTurn = false;
      gameBoard[1] = p1.id;
    } else if (topCenter.innerText === '' && !playerOneTurn) {
      topCenter.innerText = p2.id;
      playerOneTurn = true;
      gameBoard[1] = p2.id;
    }
  });

  topRight.addEventListener('click', function () {
    console.log('top');
    if (topRight.innerText === '' && playerOneTurn) {
      topRight.innerText = p1.id;
      playerOneTurn = false;
      gameBoard[2] = p1.id;
    } else if (topRight.innerText === '' && !playerOneTurn) {
      topRight.innerText = p2.id;
      playerOneTurn = true;
      gameBoard[2] = p2.id;
    }
  });

  centerLeft.addEventListener('click', function () {
    console.log('top');
    if (centerLeft.innerText === '' && playerOneTurn) {
      centerLeft.innerText = p1.id;
      playerOneTurn = false;
      gameBoard[3] = p1.id;
    } else if (centerLeft.innerText === '' && !playerOneTurn) {
      centerLeft.innerText = p2.id;
      playerOneTurn = true;
      gameBoard[3] = p2.id;
    }
  });

  center.addEventListener('click', function () {
    console.log('top');
    if (center.innerText === '' && playerOneTurn) {
      center.innerText = p1.id;
      playerOneTurn = false;
      gameBoard[4] = p1.id;
    } else if (center.innerText === '' && !playerOneTurn) {
      center.innerText = p2.id;
      playerOneTurn = true;
      gameBoard[4] = p2.id;
    }
  });

  centerRight.addEventListener('click', function () {
    console.log('top');
    if (centerRight.innerText === '' && playerOneTurn) {
      centerRight.innerText = p1.id;
      playerOneTurn = false;
      gameBoard[5] = p1.id;
    } else if (centerRight.innerText === '' && !playerOneTurn) {
      centerRight.innerText = p2.id;
      playerOneTurn = true;
      gameBoard[5] = p2.id;
    }
  });

  bottomLeft.addEventListener('click', function () {
    console.log('top');
    if (bottomLeft.innerText === '' && playerOneTurn) {
      bottomLeft.innerText = p1.id;
      playerOneTurn = false;
      gameBoard[6] = p1.id;
    } else if (bottomLeft.innerText === '' && !playerOneTurn) {
      bottomLeft.innerText = p2.id;
      playerOneTurn = true;
      gameBoard[6] = p2.id;
    }
  });

  bottomCenter.addEventListener('click', function () {
    console.log('top');
    if (bottomCenter.innerText === '' && playerOneTurn) {
      bottomCenter.innerText = p1.id;
      playerOneTurn = false;
      gameBoard[7] = p1.id;
    } else if (bottomCenter.innerText === '' && !playerOneTurn) {
      bottomCenter.innerText = p2.id;
      playerOneTurn = true;
      gameBoard[7] = p2.id;
    }
  });

  bottomRight.addEventListener('click', function () {
    console.log('top');
    if (bottomRight.innerText === '' && playerOneTurn) {
      bottomRight.innerText = p1.id;
      playerOneTurn = false;
      gameBoard[8] = p1.id;
    } else if (bottomRight.innerText === '' && !playerOneTurn) {
      bottomRight.innerText = p2.id;
      playerOneTurn = true;
      gameBoard[8] = p2.id;
    }
  });

  checkWin();
}

function checkWin() {
  //col-1
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== '') {
    console.log(`Someone won`);
  }
  //col-2
  if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] !== '') {
    console.log('Someone won');
  }
  //col-3
  if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== '') {
    console.log('Someone won');
  }
  //row-1
  if (gameBoard[0] === gameBoard[3] &gameBoard[3] === gameBoard[6] &gameBoard[0] !== '') {
    console.log('Someone won');
  }
  //row-2
  if (gameBoard[1] === gameBoard[4] &&gameBoard[4] === gameBoard[7] &&gameBoard[1] !== '') {
      console.log('Someone won');
  }
  //row-3
  if (gameBoard[2] === gameBoard[5] &&gameBoard[5] === gameBoard[8] &&gameBoard[2] !== '') {
      console.log('Someone won');
  }
}
