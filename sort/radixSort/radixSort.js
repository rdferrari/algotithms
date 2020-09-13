// Works just for numbers

function getDigit(num, i) {
  // abs for negative number
  // Math.pow(10, 2) === 10ˆ2
  // 8765 / 100 = 87.65
  // Math.floor(87.65) = 87
  // 87 / 10 = 8.7
  // reminder of 87 / 10 = 7
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// console.log(getDigit(8765, 2)); // reminder of 87 / 10 = 7

function digitCount(num) {
  // Math.log10(0) = -Infinity
  if (num === 0) return 1;
  // Math.log10(400) = 2
  // 2 + 1 = 3 digits
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(432));

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    // Math.max compare if maxDigits > digitCount(nums[i])
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// console.log(mostDigits([2, 34, 66, 22, 44, 5555]));

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    // create array
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      // get digit of number
      // getDigit(i = 222, k = 0) = 2
      let digit = getDigit(nums[i], k);
      // nums[i] = 222
      // digitBuckets[2] =
      // push 222 to bucket 2
      digitBuckets[digit].push(nums[i]);
    }
    // ...digitBuckets take all the elements of array
    // works as a loop trough the array
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([222, 33, 4, 5555, 6666, 88888, 7, 44]));
