'use strict';

class Stack {
  constructor(){
    this.top = null;
  }

  push(value){
    let newNode = new Node;
    newNode = ;

  }

  pop(){

  }

  peek(){
    //solve this-----
  }

  isEmpty(){
    return this.top === null;
  }

}

class Queue{
  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(value){
    let newNode = new Node(value);
    if(this.front){
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }
  dequeue(){

  }
  // Arguments: none
  // Returns: the value from node from the front of the queue
  // Removes the node from the front of the queue
  // Should raise exception when called on empty queue
  peek(){
    
  }
  // Arguments: none
  // Returns: Value of the node located at the front of the queue
  // Should raise exception when called on empty stack
  isEmpty(){
    
  }
  // Arguments: none
  // Returns: Boolean indicating whether or not the queue is empty


}

