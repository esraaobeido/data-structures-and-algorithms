class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

class PseudoQueue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  enqueue(value) {
    while (!this.stackOne.isEmpty()) {
      this.stackTwo.push(this.stackOne.pop());
    }
    this.stackOne.push(value);
    while (!this.stackTwo.isEmpty()) {
      this.stackOne.push(this.stackTwo.pop());
    }
  }

  dequeue() {
    if (this.stackOne.isEmpty()) {
      throw new Error('PseudoQueue is empty');
    }
    return this.stackOne.pop();
  }
}

module.exports = { PseudoQueue };