const same = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  let counterOne = {};
  let counterTwo = {};
  for (let val of arrOne) {
    counterOne[val] = (counterOne[val] || 0) + 1;
    console.log(counterOne[val]);
  }

  return true;
};

arrOne = [2, 3, 4];
arrTwo = [4, 9, 16];

same(arrOne, arrTwo);
