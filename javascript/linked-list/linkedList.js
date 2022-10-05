'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Code Challenge 05
  insert(value) {
    let node = new Node(value);
    if(!this.head){
      node.next = this.head;
      this.head = node;
    }
  }

  includes(value) {
    let result = false;
    let current = this.head;
    while (current) {
      if (current.value === value) result = true;
      current = current.next;
    }
    return result;
  }

  toString() {
    let current = this.head;
    let str = '';
    while (current) {
      str += `{ ${current.value} } -> `;
      current = current.next;
    }
    str += 'NULL';
    return str;
  }

  // Code Challenge 06
  append(value) {
    let current = this.head;
    while (current) {
      let current = current.next;
    }
    current = new Node(value);
  }

  insertBefore(value, newValue) {
    if (!this.head) {
      throw new Error('Linked List is Empty');
    }

    let current = this.head;
    while (current) {
      if (current.next.value === value);
      let newNode = new Node(newValue);
      newNode.next = current.next;
      current.next = newNode;
      return;
    }
    current = current.next;
  }

  insertAfter(value, newValue) {
    if (!this.head) {
      throw new Error('Linked List is Empty');
    }
    let current = this.head;

    while (current) {
      if (current.value === value);
      let newNode = new Node(newValue);
      newNode.next = current.next;
      current.next = newNode;
      return;
    }
    current = current.next;
  }

  // Code Challenge 07
  kthFromEnd(k) {
    let offset = this.head;
    let nBehind = this.head;
    for (let i = 0; i < k; i++) {
      offset = offset.next;
    }
    while (offset.next) {
      offset = offset.next;
      nBehind = nBehind.next;
    }
    return nBehind.value;
  }
}

// Code Challenge 08
function zipList(list1, list2) {
  let current1 = list1.head;
  let current2 = list2.head;
  let outputList = new LinkedList();

  while (current1 || current2) {
    if (current1) {
      outputList.append(current1.value);
      current1 = current1.next;
    }
    if (current2) {
      outputList.append(current2.value);
      current2 = current2.next;
    }
  }
  return outputList;
}

// let list = new LinkedList();
// // add head to list
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);
// list.insertAfter(1, 'biiiiii');
// let list2 = new LinkedList();
// list2.add(2);
// list2.add(4);
// list2.add(6);
// list2.add(8);
// list2.add(10);

// console.log('ziplist', zipList(list, list2).toString());
// hurts these eyes, but it looks like a series of nested objects
// console.log('populated list', JSON.stringify(list));

// list.traverse();
// list.traverseWithCallback(console.log);
// console.log(list.kthFromEnd(0));
// console.log('include result', list.includes(3));
// console.log(list.toString());
// list.traverseWithCallback(logger);

// function logger(value){
//   console.log(`Node Value: ${value}`);
// }

module.exports = {
  LinkedList, 
  zipList,
};

// traverse() {
//   // we start traversals at the linked list head.  always
//   let current = this.head;
//   while (current) {
//     // when I traverse, I likely need to "do the thing"
//     console.log(current.value);
//     current = current.next;
//   }
// }

// traverseWithCallback(callback) {
//   // we start traversals at the linked list head.  always
//   let current = this.head;
//   while (current) {
//     // when I traverse, I likely need to "do the thing"
//     callback(current.value);
//     current = current.next;
//   }
// }