'use strict';

const { Stack } = require('../index');

describe('Stack Tests', () => {
  const stack = new Stack();
  test('Can check if stack is empty', () => {
    expect(stack.top).toBeNull();
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
});
