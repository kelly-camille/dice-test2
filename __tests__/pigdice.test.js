// import Triangle from './../src/triangle.js';

// describe('Triangle', () => {

//   test('should correctly create a triangle object with three lengths', () => {
//     const triangle = new Triangle(2,4,5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });

import { Game } from "./../src/scripts.js";
import { Player } from "./../src/scripts.js";

describe('Player', () => {

  let name;
  let variable;
  let player;

  beforeEach(() => {
    name = "herbert";
    variable = 0;
    player = new Player(name, variable);
  });

  test('should take two arguments and have three key:value pairs', () => {
    expect(typeof player.currentTotal === undefined);
    expect(player.name.includes("herbert"));
    expect(player.totalPts === 0);
  });

  test ('should take two intergers and return a random number between 1-6', () => {
    expect(player.diceRoll > 0 || player.diceRoll <= 6);
  });

  test ('Should determine if total points >= 100', () => {
    player.currentTotal = [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6];
    expect(player.totalPts >= 100);
  });
});
describe ('Game', () => {
  
  let name1;
  let name2;
  let variable;
  let player1;
  let player2;
  let game;

  beforeEach(() => {
    name1 = "Kelly";
    name2 = "Sam";
    variable = 0;
    player1 = new Player(name1, variable);
    player2 = new Player(name2, variable);
    game = new Game (player1, player2);
  })
  
  test ('Holds two player objects', () => {
    expect(game.firstPlayer.name).toEqual("Kelly");
    expect(game.secondPlayer.name).toEqual("Sam");
  });
});

