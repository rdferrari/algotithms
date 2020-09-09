// scale well - O(n log n)

const arr1 = [1, 10, 50];
const arr2 = [2, 14, 99, 100];

function mergeSort(arr1, arr2) {
  //

  let arrShorter = [];
  let arrlonger = [];

  if (arr1.length < arr2.length) {
    arrShorter = arr1;
    arrlonger = arr2;
  } else {
    arrShorter = arr2;
    arrlonger = arr1;
  }

  let arrayMerged = [];
  let i = 0;
  let j = 0;

  while (i < arrShorter.length) {
    if (arrShorter[i] < arrlonger[j]) {
      arrayMerged.push(arrShorter[i]);
      i++;
    } else {
      arrayMerged.push(arrlonger[j]);
      j++;
    }
  }

  while (j < arrlonger.length) {
    arrayMerged.push(arrlonger[j]);
    j++;
  }

  return arrayMerged;
}

console.log(mergeSort(arr1, arr2));
console.log(mergeSort([], [1, 4]));

function divideArr(arr) {
    if (arr.length === 1 || 0)
}
