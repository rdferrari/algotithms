function isPalindrome(str) {
  //

  let result = false;
  let reversedStr = "";

  function helper(input) {
    if (input.length === 0) return result;

    reversedStr += input[input.length - 1];

    // console.log(input, reverseStr);
    input = input.slice(0, input.length - 1);

    // console.log(input);
    helper(input);
    console.log(str, reversedStr);
    if (str === reversedStr) result = true;
  }

  console.log(str, reversedStr);

  helper(str);

  return result;
}

console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("ball")); // false
