'use strict';

const insertionSort = require('../index');

describe('Can successfully sort', () => {
  test('sort array in numerical order', () => {
    let array = insertionSort([8,4,23,42,16,15]);
    expect(array).toEqual([4,8,15,16,23,42]);
  });
});
