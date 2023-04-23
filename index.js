"use strict";

const { Fighter } = require('./src/Fighter.js');
const { Weapon } = require('./src/Weapon.js');
const { Shield } = require('./src/Shield.js');

const weapon = new Weapon("Sword", 10);
const shield = new Shield("Wooden Shield", 10);
const heracles = new Fighter("🧔 Heracles", 20, 6, weapon, shield);
const opponent = new Fighter("🐗 Erymanthian Boar", 25, 12);

let round = 1;
while(opponent.isAlive() && heracles.isAlive()) {
    console.log(`Round ${round}`)
    heracles.fight(opponent);
    opponent.fight(heracles);
    round++;
}
let winner = heracles.winner() + opponent.winner();
let looser = heracles.looser() + opponent.looser();
console.log(`🏆 The winner is ${winner} 🏆 💀 The looser is ${looser} 💀`)