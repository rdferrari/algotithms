// Objects are unorder key value pairs.

// fast access, insertion, remove

// O(N)

let person = {
  name: "Rodrigo",
  age: 40,
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(person.hasOwnProperty("name"));
