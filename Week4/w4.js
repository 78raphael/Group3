// Core Requirements
const reset = document.getElementById('reset');
const cells = document.querySelectorAll('.cell');
const divBoard = document.forms.ticTac;
const player1 = {name: "player1", sign: "X"};
const player2 = {name: "player2", sign: "0"};
let player = player1;

const getId = (e) => {
  let cellName = e.target;
  document.getElementById("currentPlayer").innerHTML = player.name;
  cellName.innerHTML = player.sign;
  if (player == player1) player = player2;
  else player = player1;
}
  // console.log(e.target);

divBoard.addEventListener('click', getId);


// 03
// Add a reset button.
// When touched the reset button should remove all of the marks from the board.


const resetBoard = (e) =>  {
  e.preventDefault();
  cells.forEach((c) => {
    c.innerHTML = '';
  });
}

reset.addEventListener('click', resetBoard, false);

{/* <input type="reset" value="Reset Form"> */}
//<input type="button" value="Reset Form" onClick="this.form.reset()
// document.getElementById("reset").reset();
// formObject.reset();
// Stretch Goals

// 01
// Borders all around the outside, incorrect
// Onlt borders on the inside, correct
// Hint: look into :nth-child(n), :last-child, etc for help to target specific cells to turn borders on or off.

// DONE


// 02
// Add Game logic
// Right now the players have to decide who won, or whether it was a tie. Add some game logic to figure out when the game should result in a tie.



// 03
// Add More Game logic
// Add the logic to figure out when someone wins.