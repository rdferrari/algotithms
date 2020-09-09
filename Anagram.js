const Anagram = (str1, str2) => {
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    frequencyCounter1[str1[i]] = (frequencyCounter1[str1[i]] || 0) + 1;
  }
  for (let j = 0; j < str1.length; j++) {
    frequencyCounter2[str2[j]] = (frequencyCounter2[str2[j]] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    } else if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
};

console.log(Anagram("anagram", "nagaram"));
console.log(Anagram("anagram", "nagara"));
console.log(Anagram("anagram", "nagaramm"));
