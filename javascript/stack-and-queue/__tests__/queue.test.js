'use strict';

const { Queue } = require('../index');

describe('Queue Tests', () => {
  const queue = new Queue();

  test('Initial stack to be null', () => {
    expect(queue.top).toBeNull();
  });

  test('Push data into the queue with push method', () => {
    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.top.value).toEqual(1);
    expect(queue.top.value).toEqual(1);
    expect(queue.top.value).toEqual(1);
  });

  describe('Stack Tests', () => {
    const stack = new Stack();
    test('Can check if stack is empty', () => {
      expect(stack.top).toBeNull();
    });
  
    test('Can successfully push onto a stack', () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.top.value).toEqual(1);
    });
  
    test('Can successfully push multiple onto a stack', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.top.value).toEqual(1);
      expect(stack.top.next.value).toEqual(2);
      expect(stack.top.next.next.value).toEqual(3);
    });
  
    test('Can successfully pop off the stack', () => {
      const stack = new Stack();
      stack.pop(3);
      expect(stack.top.value).toEqual(3);
    });
  
    test('Can successfully pop multiple off the stack', () => {
      const stack = new Stack();
      stack.pop(2);
      stack.pop(1);
      expect(stack.value).toEqual(null);
    });
  
    test('Can successfully peek the next item the stack', () => {
      // const stack = new Stack();
    });
});
