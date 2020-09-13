function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  let str1 = num1.toString();
  let str2 = num2.toString();
  let counter1 = {};
  let counter2 = {};

  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    counter1[str1[i]] = (counter1[str1[i]] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    counter2[str2[j]] = (counter2[str2[j]] || 0) + 1;
  }

  for (let key in counter1) {
    if (!(key in counter2)) {
      return false;
    } else if (counter1[key] !== counter2[key]) {
      return false;
    }
  }

  // console.log(counter1);

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(14, 34)); // false
console.log(sameFrequency(39563122119, 11139226395)); // true
console.log(sameFrequency(3956122111, 1112263955)); // false
