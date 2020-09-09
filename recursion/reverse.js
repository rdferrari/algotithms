function reverse(str) {
  //

  let reverseStr = "";

  function helper(input) {
    if (input.length === 0) return reverseStr;

    // console.log(input[input.length - 1]);
    // console.log(input, reverseStr);

    reverseStr += input[input.length - 1];

    // console.log(input, reverseStr);
    input = input.slice(0, input.length - 1);

    console.log(input);
    helper(input);
  }

  helper(str);

  return reverseStr;
}

console.log(reverse("awesome")); // 'emosewa'
