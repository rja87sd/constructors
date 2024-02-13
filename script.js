"use strict";

function Television(powerStatus = false, currentChannel = 33) {
  this.powerStatus = powerStatus;
  this.currentChannel = currentChannel;
}

Television.prototype.changePower = function () {
  this.powerStatus = !this.powerStatus;
  console.log(`The TV is now ${this.powerStatus ? "ON" : "OFF"}.`);
};

Television.prototype.changeChannel = function (newChannel) {
  this.currentChannel = newChannel;
};

Television.prototype.getState = function () {
  if (!this.powerStatus) {
    console.log("Please turn on the TV.");
    return;
  } else if (this.currentChannel < 1) {
    console.log("Please enter a valid channel number (1 - 100).");
    return;
  } else if (this.currentChannel > 100) {
    console.log("Please enter a valid channel number (1 - 100).");
    return;
  } else {
    console.log(`The TV is ${this.powerStatus ? "ON" : "OFF"}.`);
    console.log(`The TV is set to channel ${this.currentChannel}.`);
    return;
  }
};

const myTelevision1 = new Television(false, 12);
const myCoffeeMaker2 = new CoffeeMaker(true, 33);
const myCoffeeMaker3 = new CoffeeMaker(false, 115);
