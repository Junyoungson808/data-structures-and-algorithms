'use strict';

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let j = i - 1;
    let temp = array[i];
    while(j >= 0 && temp < array[j]){
      array[j+1] = array[j];
      j = j - 1;
    }
    array[j+1] = temp;
  }
  return array;
}

console.log(insertionSort([8,4,23,42,16,15]));

module.exports = insertionSort;
