'use strict';

const { Queue } = require('../index');

describe('Stack Tests', () => {
  const queue = new Queue();

  test('Initial stack to be null', () => {
    expect(queue.top).toBeNull();
  });

  test('Push data into the queue with push method', () => {
    queue.push(1);
    expect(queue.top.value).toEqual(1);
    queue.push(2);
    expect(queue.top.value).toEqual(1);
    queue.push(3);
    expect(queue.top.value).toEqual(1);
  });
});
