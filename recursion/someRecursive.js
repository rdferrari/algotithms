function isOdd(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

function someRecursive(arr, callback) {
  //

  let result = false;

  function helper(arr) {
    if (arr.length === 0) return 0;

    console.log(callback(arr[0]));

    if (callback(arr[0])) {
      result = true;
      return result;
    } else {
      arr = arr.slice(1);
      console.log(arr);
      helper(arr);
    }
  }

  helper(arr);

  return result;
}

console.log(someRecursive([1, 2, 2, 3, 4, 5, 9], isOdd));
