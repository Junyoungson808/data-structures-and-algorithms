'use strict';

const { Stack } = require('./index');

describe('Stack Tests', () => {
  const stack = new Stack();

  test('Initial stack to be null', () => {
    expect(stack.top).toBeNull();
  });

  test('Push data into the stack with push method', () => {
    stack.push(1);
    expect(stack.top.value).toEqual(1);
    stack.push(2);
    expect(stack.top.value).toEqual(1);
    stack.push(3);
    expect(stack.top.value).toEqual(1);
  });
})