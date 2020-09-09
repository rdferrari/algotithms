// sort rearranging items in a collection
// common task
// many ways to sort
// Built in JavaScript sort works with string

const names = ["Lu", "Ro", "Mi", "Vi"];
const namesSorted = names.sort();
console.log(namesSorted); // [ 'Lu', 'Mi', 'Ro', 'Vi' ]

// JavaScript sort DON´T works with NUMBERS - unicode

const numbers = [6, 4, 15, 10];
const crazySortedNumbers = numbers.sort();
console.log(crazySortedNumbers); // [ 10, 15, 4, 6 ]

// To sort numbers asc

function numberCompareAsc(number1, number2) {
  return number1 - number2;
}

const sortedNumbersAsc = numbers.sort(numberCompareAsc);
console.log(sortedNumbersAsc); // [ 4, 6, 10, 15 ]

// To sort numbers desc

function numberCompareDesc(number1, number2) {
  return number2 - number1;
}

const sortedNumbersDesc = numbers.sort(numberCompareDesc);
console.log(sortedNumbersDesc); // [ 15, 10, 6, 4 ]

// Bubble sort and insert sort works good when the array is almost sorted.

// Insertion sort is good to insert an item and maintain the array sorted

// Don´t scla well
