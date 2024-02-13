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
  console.log(`The channel is now set to ${this.currentChannel}.`);
};

Television.prototype.watchTV = function () {
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
    console.log(`Watching TV on channel ${this.currentChannel}...`);
    return;
  }
};

Television.prototype.getState = function () {
  console.log(`The TV is ${this.powerStatus ? "ON" : "OFF"}.`);
  console.log(`The TV is set to channel ${this.currentChannel}.`);
};

const myTelevision1 = new Television(false, 12);
const myTelevision2 = new Television(true, 33);
const myTelevision3 = new Television(false, 115);

myTelevision1.getState();
myTelevision1.watchTV();
myTelevision1.changePower();
myTelevision1.watchTV();

myTelevision2.getState();
myTelevision2.watchTV();
myTelevision2.changeChannel(30);
myTelevision2.watchTV();

myTelevision3.getState();
myTelevision3.watchTV();
myTelevision3.changePower();
myTelevision3.watchTV();
myTelevision3.changeChannel(99);
myTelevision3.watchTV();
