# InsertionSort
<!-- Description of the challenge -->
Merge Sort function is a sorting algorithm that is based ona  divide and conquer paradigm. This method breaks down the given array into smaller parts until it cannot be broken down any further. Once the elements are broken down it merges them together in a sorted manner.

## ![Whiteboard Process](./Untitled%20(3).png)
<!-- Embedded whiteboard image -->

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Time Complexity: O(nlogn)
Auxiliary Space: O(N)

## Solution
<!-- Show how to run your code, and examples of it in action -->
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)
  // console.log('left:', left);
  // console.log('right:', right);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  }  
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

module.exports = mergeSort;
