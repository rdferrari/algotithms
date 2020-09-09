// linear search *** unsorted array

const names = ["Ro", "Lu", "Vi", "Mi"];

// console.log(names.indexOf("Lu")); // 1
// console.log(names.includes("Lu")); // true
// console.log(names.find((name) => name === "Lu")); // Lu
// console.log(names.findIndex((name) => name === "Lu")); // 1

function linearSearch(arr, name) {
  let result = -1;
  arr.map((element, index) => {
    if (element === name) {
      result = index;
    }
  });
  return result;
}

// console.log(linearSearch(names, "Lu"));

// binary search - ***sorted array - O(log n) or O(1)

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(arr, number) {
  //
  // let result = -1;

  if (number > arr[arr.length - 1]) return -1;
  if (number < arr[0]) return -1;

  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((arr.length - 1) / 2);

  while (left <= right) {
    if (number === arr[middle]) {
      return middle;
    } else if (number > arr[middle]) {
      left = middle + 1;
      middle = Math.floor((right + left) / 2);
    } else if (number < arr[middle]) {
      right = middle - 1;
      middle = Math.floor(right / 2);
    }
  }

  return -1;
}

// console.log(binarySearch(sortedArr, 11));
// console.log(binarySearch(sortedArr, -11));
// console.log(binarySearch(sortedArr, 3));
// console.log(binarySearch(sortedArr, 7));

// naive string search

function stringSearch(str, substr) {
  //
  let count = 0;
  let subCount = 0;

  for (let i = 0; i < str.length - substr.length + 1; i++) {
    console.log(str[i]);
    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        break;
      }
      subCount++;
      console.log(str[i + j], substr[j]);
    }
    if (subCount === substr.length) {
      count++;
    }
    subCount = 0;
  }

  return count;
}

console.log(stringSearch("iwonidfwonnwononuwonrrrwommwon", "won")); // 3
