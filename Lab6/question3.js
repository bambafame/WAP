"use strict";

function Animal(name, speed) {
  this.name = name;
  this.speed = speed;
}

Animal.prototype.run = function(speed) {
  this.speed += speed;
};

Animal.compareBySpeed() = function(a1, a2) {
  return a1.speed - a2.speed;
};

function Rabbit(name, speed) {
  Animal.call(this, name, speed);
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.hide = function() {
  console.log(`${this.name} hides`);
}
