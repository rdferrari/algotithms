class Student {
  constructor(firstName, LastName, year) {
    this.firstName = firstName;
    this.LastName = LastName;
    this.year = year;
    this.laties = 0;
    this.scores = [];
  }
  fullName() {
    return `The name of the student is ${this.firstName} ${this.LastName}`;
  }
  handleLaties() {
    this.laties += 1;
    if (this.laties > 3) {
      return "You are out";
    }

    return `This is the ${this.laties} you are late`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  static sayHello(name) {
    return `Hello ${name}`;
  }
}

const Rodrigo = new Student("Rodrigo", "Ferrari", 5);

console.log(Rodrigo);
console.log(Rodrigo.firstName);
console.log(Rodrigo.year);
console.log(Rodrigo.fullName());
console.log(Rodrigo.handleLaties());
console.log(Rodrigo.handleLaties());
console.log(Rodrigo.handleLaties());
console.log(Rodrigo.handleLaties());
Rodrigo.addScore(99);
Rodrigo.addScore(98);
console.log(Rodrigo.scores);
// Next year

Rodrigo.year = Rodrigo.year + 1;

console.log("Next year", Rodrigo.year);
console.log(Student.sayHello(Rodrigo.firstName));
