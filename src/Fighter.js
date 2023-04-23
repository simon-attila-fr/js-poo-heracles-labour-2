"use strict";

const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity, weapon = null, shield = null) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.weapon = weapon;
    this.shield = shield;
    this.life = MAX_LIFE;
  }

  // Methods
  getDamage() {
    if (this.weapon !== null) {
      return this.strength + this.weapon.damage;
    }
    return this.strength;
  }

  getDefense() {
    if (this.shield !== null) {
        return this.dexterity + this.shield.protection;
    }
    return this.dexterity
  }

  fight(defender) {
    function calculateDamage(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    if (this.life <= 0) {
      return console.log(`${this.name} is dead.`);
    }
    let damagePts = calculateDamage(1, this.getDamage()) - defender.getDefense();
    damagePts = damagePts <= 0 ? 0 : damagePts;
    if (defender.life - damagePts <= 0) {
      defender.life = 0;
    } else {
      defender.life = defender.life - damagePts;
    }
    console.log(`${this.name} damaged ${defender.name} by ${damagePts}.`);
    console.log(`${defender.name}'s new life: ${defender.life}.`);
  }

  isAlive() {
    return this.life > 0
  }

  winner() {
    return this.isAlive() ? this.name : ""
  }

  looser() {
    return !this.isAlive() ? this.name : ""
  }
}

module.exports = {
  Fighter,
};
