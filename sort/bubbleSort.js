// bubble sort O(nˆ2)
// best case bubble sort O(n)

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function bubbleSort(arr) {
  // No swaps opmization
  let noSwaps = false;
  for (let i = arr.length; i > 0; i--) {
    // No swaps opmization
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap function outside
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        swap(arr, j, j + 1);
        // No swaps opmization
        noSwaps = false;
      }
    }
    // No swaps opmization
    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort([3, 2, 5, 99, 6, 4, 1]));
