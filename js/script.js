
//Models
var board = ['X', '', '', '', '', '', '', '', ''];
var turn = 'X'

//selectors
var squares = document.querySelectorAll('.square')


//set up event listener or click listeners for my squares
  for (var i=0; i<9; i++) {
    squares[i].addEventListener('click', function (e) {
        var squareIndex = getsquareIndex(e.target)
        if (board[squareIndex] == '') {
            board[squareIndex] = turn
            drawboard()
            switchTurn()
      }
    })
}
      // loop through squares again and check which node was clicked
      for (var j=0; j < 9; j++) { //check if board is empty
  //       if (squares[j] === e.target && board[j] === '') {
  //           board[j] = turn
  //           drawboard()
  //           switchTurn()
  //       }
  //     }
  //   })
  // }

//given an HTML element, it will determine the index of the square on the board
function getsquareIndex(target){
  for (var j=0; j < 9; j++) {
      if (squares[j] === target) { //<-check if the current itereated square is the square that was clicked
  }     return j;
}


//Drawing model to screen
function drawboard() {
  for (var i=0; i<9; i++) {
    squares[i].innerHTML = board[i]
  }
}

// switching turns
function switchTurn() {
  if (turn === 'X')
    turn = 'O'
  else
    turn = 'X'
}

function checkWin () {
  var winCombos = [
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,4,8],
   [2,4,6],
  ]
  for (var i = 0; i < winCombos.length; i++) {
      var winCombo = winCombos[i];
      var square1 = winCombo [0];
      var square2 = winCombo [1];
      var square3 = winCombo [2];

      if(board[square1] === board[secondSquare] &&
         board[square1] === board[thirdSquare] &&
         board[square1] !== '') {
         alert(turn + ' Wins!')
      }
  }
}


