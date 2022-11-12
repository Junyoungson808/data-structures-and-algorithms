'use strict';

const { Stack } = require('./index');
// const validateBrackets = require('./index');

const stackTest = new Stack();

describe('Validate if brackets are complete', () => {
  test('Can successfully push onto a stack', () => {
    console.log(stackTest[1]);
    stackTest.push(1);
    expect(stackTest.length).toBe(1);
    expect(stackTest.isEmpty()).not.toBeTruthy();
    expect(stackTest.peek()).toEqual(1);
  });
  test('Can successfully push multiple values onto a stack', () => {
    stackTest.push('()');
    stackTest.push({});
    stackTest.push([]);
    expect(stackTest.length).toBe(4);
    expect(stackTest.isEmpty()).not.toBeTruthy();
  });
  test('Can successfully validate', () => {
    const response = stackTest.validateBrackets();

    expect(response).toEqual([]);
  });
});

