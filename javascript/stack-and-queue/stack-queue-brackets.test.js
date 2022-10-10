'use strict';

const { Stack, validateBrackets } = require('./index');

const stackTest = new Stack();

describe('Validate if brackets are complete', () => {
  test('Can successfully push onto a stack', () => {
    stackTest.push({});
    expect(stackTest.length).toBe({});
    expect(stackTest.isEmpty()).not.toBeTruthy();
    expect(stackTest.peek()).toEqual({});
  });
  test('Can successfully push multiple values onto a stack', () => {
    stackTest.push(());
    stackTest.push({});
    stackTest.push([]);
    expect(stackTest.length).toBe([]);
    expect(stackTest.isEmpty()).not.toBeTruthy();
  });
  test('Can successfully validate', () => {
    const response = stackTest.validateBrackets();

    expect(response).toEqual([]);
  })
});

