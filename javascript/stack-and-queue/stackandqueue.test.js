'use strict';

const { Stack, Queue } = require('./index');

const stackTest = new Stack();
const queueTest = new Queue();

describe('Stacks & Queue Tests', () => {
  test('Can successfully push onto a stack', () => {
    stackTest.push(1);
    expect(stackTest.length).toBe(1);
    expect(stackTest.isEmpty()).not.toBeTruthy();
    expect(stackTest.peek()).toEqual(1);
  });
  test('Can successfully push multiple values onto a stack', () => {
    stackTest.push(2);
    stackTest.push(3);
    stackTest.push(4);
    expect(stackTest.length).toBe(4);
    expect(stackTest.isEmpty()).not.toBeTruthy();
  });
  test('Can successfully pop off the stack', () => {
    const response = stackTest.pop();

    expect(response).toEqual(4);
    expect(stackTest.length).toBe(3);
    expect(stackTest.isEmpty()).not.toBeTruthy();
  });
  test('Can successfully empty a stack after multiple pops', () => {
    stackTest.pop();
    stackTest.pop();
    stackTest.pop();
    stackTest.pop();
    expect(stackTest.length).toBe(0);
    expect(stackTest.isEmpty()).toBeTruthy();
  });
  test('Can successfully peek the next item on the stack', () => {
    stackTest.push(1);
    stackTest.push(2);
    stackTest.push(3);
    let response = stackTest.peek();

    expect(response).toEqual(3);
  });
  // test('Can successfully instantiate an empty stack', () => {
  //   let newStack = new Stack();

  //   expect(newStack).toBeTruthy();
  //   expect(newStack.isEmpty()).toBeTruthy();
  // });
  // QUEUE TESTS START ----------------------------------------------------------
  test('Can successfully enqueue into a queue', () => {
    queueTest.enqueue(1);

    expect(queueTest.isEmpty()).not.toBeTruthy();
    expect(queueTest.peek()).toEqual();
  });
  test('Can successfully enqueue multiple values into a queue', () => {
    queueTest.enqueue(5);
    queueTest.enqueue(6);
    queueTest.enqueue(7);

    expect(queueTest.isEmpty()).not.toBeTruthy();
    expect(queueTest.peek()).toEqual();
    expect(queueTest.back.value).toEqual(7);
  });
  test('Can successfully dequeue out of a queue the expected value', () => {
    queueTest.dequeue();

    expect(queueTest.isEmpty()).not.toBeTruthy();
    expect(queueTest.peek()).toEqual();
  //   expect(queueTest.back.value).toEqual(7);
  });
});
