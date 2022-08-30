/*     Business Logic     */
export function Player(name, variable) {
  this.name = name;
  this.currentTotal = [];
  this.totalPts = variable;
}

export function Game(player1, player2) {
  this.firstPlayer = player1;
  this.secondPlayer = player2;
  this.activePlayer = 1;
}

Player.prototype.diceRoll = function() {
  const min = Math.ceil(1);  
  let number = Math.floor((Math.random() * 6) + min);  //Both max and min are inclusive. [See last example on MDN's 'Math.random()' page for reference. -SM] 
  if (number !== 1) { 
    this.currentTotal.push(number);
  } else {  //(If 'number === 1')
    console.log("Resetting currentTotal");
    console.log(this.currentTotal);
    game.changeTurn();
    return this.currentTotal = [0];
  }
}

Player.prototype.currentSum = function() {
  this.currentPoints = 0;
  for (let i=0; i < this.currentTotal.length; i++) {
    this.currentPoints += this.currentTotal[i];
  } if (this.totalPts >= 100) {
    this.winner();
  } else {
    return this.currentPoints;
  } 
}

Player.prototype.sum = function() {  //(Local-var 'totalPoints' modified to 'totalPts' for revision/clarification of Test 1.)
  this.totalPts = this.totalPts;
  for (let i = 0; i < this.currentTotal.length; i++) {
    this.totalPts += this.currentTotal[i];
  }
  this.currentTotal = [];
  return this.totalPts;
}

// Player.prototype.winner = function() {
//   document.querySelector("#youWin").removeAttribute("class");
//   document.querySelector("#gameboard").setAttribute("class", "hidden");
//   document.querySelector("#winner").innerText = this.name;
// }