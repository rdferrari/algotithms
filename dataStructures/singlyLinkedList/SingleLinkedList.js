class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// let FirstList = new Node("Hello");
// FirstList.next = new Node("world");

// console.log(FirstList);
// console.log(FirstList.next);

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // set Node.next =
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

let numbersList = new SingleLinkedList();
numbersList.push(3);
numbersList.push(33);
numbersList.push(333);
numbersList.push(3333); // add 3333
console.log(numbersList);
numbersList.pop(); // remove 3333

console.log(numbersList);
