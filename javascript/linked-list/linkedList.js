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
  add(value) {
    const node = new Node(value);

    // if there is no head, assign the new node to the head property
    if (!this.head) {
      this.head = node;
      return;
    }
    // traverse the linked list and add our new node to the end
    let current = this.head;

    // choosing current.next ON PURPOSE.
    // when current.next is null, I will reassign the new node
    while (current.next) {
      current = current.next;
    }
    //at this point next is null and we reassign the new node
    current.next = node;
  }

  traverse() {
    // we start traversals at the linked list head.  always
    let current = this.head;
    while (current) {
      // when I traverse, I likely need to "do the thing"
      console.log(current.value);
      current = current.next;
    }
  }

  traverseWithCallback(callback) {
    // we start traversals at the linked list head.  always
    let current = this.head;
    while (current) {
      // when I traverse, I likely need to "do the thing"
      callback(current.value);
      current = current.next;
    }
  }

  // Code Challenge 05
  // add node to FRONT of linked list
  append(value) {
    let current = this.head;
    while (current) {
      let current = current.next;
    }
    current = new Node(value);
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
    let str = '';
    let current = this.head;
    while (current) {
      str += `{ ${current.value} } -> `;
      current = current.next;
    }
    str += 'NULL';
    return str;
  }

  // Code Challenge 06
  insertBefore(value, newValue) {
    this.length++;
    if (this.head.value === value) {
      this.head = new Node(newValue, this.head);
      return;
    }

    let current = this.head;
    while (current.next.value !== value) {
      current = current.next;
    }
    current.next = new Node(newValue, current.next);
  }

  insertAfter(value, newValue) {
    let current = this.head;
    while (current.next !== null && current.value !== value) {
      current = current.next;
    }
    current.next = new Node(newValue, current.next);
    this.length++;
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

let list = new LinkedList();
// add head to list
list.add(1);
list.add(3);
list.add(5);
list.add(7);
list.add(9);

let list2 = new LinkedList();
list2.add(2);
list2.add(4);
list2.add(6);
list2.add(8);
list2.add(10);

console.log('ziplist', zipList(list, list2).toString());
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

module.exports = LinkedList;
