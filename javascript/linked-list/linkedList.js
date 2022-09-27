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


  insert(value) {
    this.head = new Node(value, this.head);
    this.length++;
  }

  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current !== null) {
      string += `${current.value} ->`;
      current = current.next;
    }
    return string + 'null';
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }
    //traverse the linked list and add our new node to the end.
    let current = this.head;
    // choosing current.next ON PURPOSE <---- remember
    while (current.next) {
      current = current.next;
    }
    // next one after this is null <--- remember reassign the new node.
    current.next = node;
  }

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

  traverse() {
    let current = this.head;
    while (current) {
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
list.traverseWithBool(2);

module.exports = {
  LinkedList,
};
