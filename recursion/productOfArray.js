function productOfArray(arr) {
  //

  let result = 1;

  function helper(input) {
    if (input.length === 0) return result;
    result *= input[0];
    helper(input.slice(1));
  }
  console.log(arr);

  // call helper function
  helper(arr);

  return result;
}

console.log(productOfArray([1, 2, 3, 4])); // 24
