'use strict';

const { testElement } = require('domutils');
const { Stack, Queue, PseudoQueue } = require('../stack-queue-pseudo/index');

const pseudoQueueTest = new PseudoQueue();

describe('PseudoQueue - Enqueue & Dequeue using 2 stacks', ()=> {
  test('Can successfully push onto a stack', () => {
    stackTest1.push(1);
    expect(stackTest1.length).toBe(1);
    expect(stackTest1.isEmpty()).not.toBeTruthy();
    expect(stackTest1.peek()).toEqual(1);
  });
  it('Can successfully push multiple values onto a stack', () => {
    stackTest1.push(2);
    stackTest1.push(3);
    stackTest1.push('four');
    expect(stackTest1.length).toBe(4);
    expect(stackTest1.isEmpty()).not.toBeTruthy();
  });
  it('Can successfully pop off the stack', () => {
    const response = stackTest1.pop();

    expect(response).toEqual('four');
    expect(stackTest1.length).toBe(3);
    expect(stackTest1.isEmpty()).not.toBeTruthy();
  });

