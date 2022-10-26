'use strict';

// const insertionSort = require('../insertion-sort/index');

// describe('Can successfully sort', () => {
//   test('sort array in numerical order', () => {
//     let array = insertionSort([8,4,23,42,16,15]);
//     expect(array).toEqual([4,8,15,16,23,42]);
//   });
// });


const mergeSort = require('../');

describe('Testing the mergeSort function', () => {
  it('should sort the example array', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    mergeSort(arr);
    let result = arr;
    expect(result).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
