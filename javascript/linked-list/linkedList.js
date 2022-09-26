'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  add(value){
    const node = new Node(value);

    if(!this.head){
      this.head = node;
      return;
    }
    //traverse the linked list and add our new node to the end.
    let current = this.head;
    // choosing current.next ON PURPOSE <---- remember
    while(current.next){
      current = current.next;
    }
    // next one after this is null <--- remember reassign the new node.
    current.next = node;
  }

  traverse(callback){
    let current = this.head;
    while(current){
      // callback()
      console.log(current.value);
      current = current.next;
    }
  }



}



let list = new LinkedList();
console.log('empty list', list);

// adding the head to the list
list.add(1);
list.add(2);

console.log('populated list');

list.traverse();