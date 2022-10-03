'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;

  }

  push(value) {
    let newNode = new Node;
    newNode.next = this.top;
    this.top = newNode(value);

  }

  pop(value) {
    if (this.top) {
      let temp = this.top;
      this.top = top.next;
      temp.next = null;
      return temp(value);
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
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.size++;
    return this;
  }

  dequeue() {
    //if queue is empty return false
    if (this.size === 0) return false;
    //get dequeuednode
    const dequeuedNode = this.first;
    //get new first (could be NULL if stack is length 1)
    const newFirst = this.first.next;
    //if newFirst is null, reassign last to newFirst(null)
    if (!newFirst) {
      this.last = newFirst;
    }
    //assign new first
    this.first = newFirst;
    //remove reference to list
    dequeuedNode.next = null;
    //remove 1 from size
    this.size--;
    //return dequeuednode
    return dequeuedNode;
  }

  peek() {
    if (!this.back)
      return this.value[0];
  }
  // Arguments: none
  // Returns: Value of the node located at the front of the queue
  // Should raise exception when called on empty stack

  isEmpty() {
    return this.front = null;
  }
  // Arguments: none
  // Returns: Boolean indicating whether or not the queue is empty
}


module.exports = { 
  Node,
  Stack,
  Queue,
};
