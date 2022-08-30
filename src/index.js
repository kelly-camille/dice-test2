// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Player }  from './triangle.js';
import { Game } from './triangle.js';
import './../css/styles.css';
/*     UI Logic     */


Game.prototype.changeTurn = function() {
  if (this.activePlayer === 1) {
    this.activePlayer = 2;
    console.log("p1 to p2");
    document.querySelector("div#p1Buttons").setAttribute("class", "hidden");
    document.querySelector("div#p2Buttons").removeAttribute("class");
  } else {
    console.log("p2 to p1");
    document.querySelector("div#p2Buttons").setAttribute("class", "hidden");
    document.querySelector("div#p1Buttons").removeAttribute("class");
    this.activePlayer = 1;
  } 
}

function handleGameStart(event) {
  event.preventDefault();
  const inputPlayer1 = document.querySelector("input#player1").value;
  const inputPlayer2 = document.querySelector("input#player2").value;
  let player1 = new Player(inputPlayer1, 0);
  let player2 = new Player(inputPlayer2, 0);
  let game = new Game(player1, player2); 
  document.querySelector("div#game").removeAttribute("class");
  document.querySelector("span#player1").innerText = player1.name;
  document.querySelector("span#player2").innerText = player2.name;
  document.querySelector("div#p1Buttons").removeAttribute("class");
  document.getElementById("roll1").addEventListener("click",function() {
    player1.diceRoll(); 
    document.querySelector("span#currpts1").innerHTML = player1.currentSum();
  });
  document.getElementById("roll2").addEventListener("click",function() {
    player2.diceRoll(); 
    document.querySelector("span#currpts2").innerHTML = player2.currentSum();
  });
  document.querySelector("#hold1").addEventListener("click", function(){
    player1.sum();
    document.querySelector("span#totalpts1").innerHTML = player1.totalPts;
    game.changeTurn(); 
  });
  document.querySelector("#hold2").addEventListener("click", function(){
    player2.sum();
    document.querySelector("span#totalpts2").innerHTML = player2.totalPts;
    game.changeTurn(); 
  });
}

window.addEventListener("load", function() {
  document.querySelector("form#nameInput").addEventListener("submit", handleGameStart);
}); 

Player.prototype.winner = function() {
  document.querySelector("#youWin").removeAttribute("class");
  document.querySelector("#gameboard").setAttribute("class", "hidden");
  document.querySelector("#winner").innerText = this.name;
}