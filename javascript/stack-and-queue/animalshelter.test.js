'use strict';

const { Queue } = require('./index');
const { Animal, AnimalShelter } = require('./stack-queue-animal-shelter');
// const stackTest = new Stack();
const queueTest = new Queue();

describe('Animal Shelter queue test', () => {
  let dog1 = new Animal('Dog1', 'dog');
  let dog2 = new Animal('Dog2', 'dog');
  let dog3 = new Animal('Dog3', 'dog');
  let cat1 = new Animal('Cat1', 'cat');
  let cat2 = new Animal('Cat2', 'cat');
  let cat3 = new Animal('Cat3', 'cat');

  test('Can initiate empty queue', () => {
    let newShelter = new AnimalShelter();
    expect(newShelter).toBeTruthy();
  });
  test('Can successfully enqueue onto a Queue', () => {
    let newShelter = new AnimalShelter();
    newShelter.enqueue(dog1);
    newShelter.enqueue(cat1);
    // expect(newShelter.dogs).toEqual('{ Dog1 } -> NULL');
    // expect(newShelter.cats).toEqual('{ Dog1 } -> NULL');
    // stackTest.push(1);
    // expect(stackTest.length).toBe(1);
    // expect(stackTest.isEmpty()).not.toBeTruthy();
    // expect(stackTest.peek()).toEqual(1);
  });
});
