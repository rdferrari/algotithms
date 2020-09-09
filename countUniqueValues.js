const countUniqueValues = (arr) => {
  let left = 0;
  let right = 1;
  let count = 1;

  if (arr.length === 0) {
    count = "Empty array";
  }

  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      count++;
      left = right;
      right++;
    } else {
      right++;
    }
  }

  return count;
};

console.log(countUniqueValues([1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 1, 1, 1, 2, 3, 5])); // 4
