'use strict';

class Node {
  constructor(value) {
    this.value = value;
  }
}

class Stack {
  constructor() {
    this.top = null;
    // this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      // this.tail = newNode;
    } else {
      let tempNode = this.top;
      this.top = newNode;
      this.top.next = tempNode;
    }
    this.length++;
  }

  pop() {
    if (this.top) {
      let temp = this.top;
      this.top = this.top.next;
      this.length--;
      return temp.value;
    } else {
      return null;
    }
  }

  peek() {
    if (this.top) {
      return this.top.value;
    } else {
      return null;
    }
  }

  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.front) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
    this.length++;
  }

  dequeue() {
    // Returns: the value from node from the front of the queue
    // Should raise exception when called on empty queue
    if (!this.front) {
      throw 'TyperError:';
    }

    let current = this.front;
    this.front = this.front.next;
    this.length--;
    return current.value;
  }

  peek() {
    // Returns: Value of the node located at the front of the queue
    // Should raise exception when called on empty stack
    if (!this.front) {
      console.log(`peek ${this.front.value}`);
      return this.value[0];
    }
  }

  isEmpty() {
    // Returns: Boolean indicating whether or not the queue is empty
    return this.front === null;
  }
}

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    // stack 2 will be the reverse of stack 1, and will remove the first node from stack 1
    while (!this.stack1.isEmpty()) {
      // continue to push/pop until stack1 is empty...
      this.stack2.push(this.stack1.pop());
    }
    // stack2 now has all of stack1 nodes in reverse order
    let poppedNode = this.stack2.pop();
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
    return poppedNode;
  }
}



function validateBrackets(string) {
  let stack = [];
  let i = 0;

  for (i = 0; i < string.length; i++) {
    let character = stack[stack.length - 1];

    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {

      stack.push(string[i]);

    } else if ((character === '(' && string[i] === ')') ||
      (character === '{' && string[i] === '}') ||
      (character === '[' && string[i] === ']')) {
      stack.pop();
    } else return false;
  }
  return stack.length ? false : true;
}


module.exports = {
  Stack,
  Queue,
  PseudoQueue,
  validateBrackets,
};
