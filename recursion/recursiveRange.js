function recursiveRange(number) {
  //

  let result = number;

  if (number === 0) return result;
  number--;
  return result + recursiveRange(number);
}

console.log(recursiveRange(10)); // 55
