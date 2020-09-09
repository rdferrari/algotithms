//

function fib(position) {
  //
  let fibArr = [1, 1, 2];
  let start = 2;

  function helper(input) {
    if (fibArr.length === position) return fibArr[fibArr.length - 1];
    fibArr.push(fibArr[start - 1] + fibArr[start]);
    start++;
    return helper(input);
  }

  helper(position);
  return fibArr[fibArr.length - 1];
}

console.log(fib(10)); // 55
