'use strict';


class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;

  }

  push(value){
    let newNode = new Node;
    newNode.next = this.top;
    this.top = newNode;

  }

  pop(){
    if(this.top) {
      let current = this.top.data;
      this.top = this.top.next;
      return current;
    } else {
      return null;
    }

    // Arguments: none
    // Returns: the value from node from the top of the stack
    // Removes the node from the top of the stack
    // Should raise exception when called on empty stack
  }

  peek(){
    if(this.top) {
      console.log();
      return this.top.value;
    }
    // Arguments: none
    // Returns: Value of the node located at the top of the stack
    // Should raise exception when called on empty stack\
  }

  isEmpty(){
    return this.top === null;
  }

}

// const stack = new Stack();

// stack.push('cow');
// stack.push('rabbit');
// stack.push('bwaaaap');

// stack.pop();

// stack.peek();

class Queue{
  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(value){
    let newNode = new Node(value);
    if(!this.front){
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }
  dequeue(){
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
  // Arguments: none
  // Returns: the value from node from the front of the queue
  // Removes the node from the front of the queue
  // Should raise exception when called on empty queue

  // peek(){
  //   if(!this.)
  //   return this.value[0];
  // }
  // Arguments: none
  // Returns: Value of the node located at the front of the queue
  // Should raise exception when called on empty stack

  // isEmpty(){
  //   returning this.
  // }
  // Arguments: none
  // Returns: Boolean indicating whether or not the queue is empty
}


module.exports = { Stack, Queue };