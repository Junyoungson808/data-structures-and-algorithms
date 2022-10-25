# InsertionSort
<!-- Description of the challenge -->
Insertion sort is a function taht takes in an array of integers as an argument. The insertion sort function iterates over each item in the array, and checks if the previous number is higher than its value. While the items are lower it will continue to push the higher numbers back and lower numbers forward until they find the right position. Then the function will return the array sorted in a numerical value.

## ![Whiteboard Process](./Untitled%20(1).png)
<!-- Embedded whiteboard image -->


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Time Complexity: O(N^2)
Auxiliary Space: O(1)

## Solution
<!-- Show how to run your code, and examples of it in action -->
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

module.exports = insertionSort;