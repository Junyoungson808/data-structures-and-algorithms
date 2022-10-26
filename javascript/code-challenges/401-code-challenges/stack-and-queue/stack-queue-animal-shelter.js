'use strict';

const { Queue } = require('./index');

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
}

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
  }

  enqueue(animal) {
    animal.time = Date.now();
    switch (animal.species) {
    case 'dog':
      this.dogs.enqueue(animal);
      return;
    case 'cat':
      this.cats.enqueue(animal);
      return;
    default:
      throw new Error(`We don't serve that animal`);
    }
  }
  dequeue(pref = null) {
    switch (pref) {
    case 'dog':
      return this.dogs.dequeue();
    case 'cat':
      return this.cats.dequeue();
    case null:
      return this.dogs.front.value.time < this.cats.front.value.time
        ? this.dogs.dequeue()
        : this.cats.dequeue();
    default:
      throw new Error(`We don't serve that animal`);
    }
  }
}

module.exports = { Animal, AnimalShelter };

