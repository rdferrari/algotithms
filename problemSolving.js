// understand the problem, ask questions, think before do it
// explore concrete examples
// Break it down
// Solve / simplicity
// Look back and refactor

// ----////----
// Frequency Counter O(N)

// Anytime comparing pieces of data

// Check if arr1 values === arr2 square values

const compareArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let i = 0; i < arr1.length; i++) {
    frequencyCounter1[arr1[i]] = (frequencyCounter1[arr1[i]] || 0) + 1;
  }

  for (let value of arr2) {
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    } else if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
  }

  return true;
};

// console.log(compareArrays([1, 2, 3], [1, 4, 9]));

let person = {
  name: "Rodrigo",
  age: 40,
};

// Check if key is in Object

// if ("name" in person) {
//   console.log(person.name);
// }

// ----////----
// Multiple Pointers O(N)

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

// console.log(sumZero([-3, -2, -1, 0, 1]));

// ----////----
// Sliding window O(N)

// Track subset array/string

const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) {
    return "Ops";
  }

  for (let i = 0; i < num; i++) {
    maxSum = maxSum + arr[i];
  }

  tempSum = maxSum;

  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
};

console.log(maxSubarraySum([1, 4, 5, 8, 9, 4, 2, 4, 7], 3));
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// ----////----
// Divide and conquer O(N)
