function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

// Selection sort O(nˆ2) - better of bubble
// less swaps

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    swap(arr, i, lowest);
  }

  return arr;
}

console.log(selectionSort([3, 2, 5, 99, 6, 4, 1]));
