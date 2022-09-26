'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const node = new Node(data);

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

  search(head, x) {
    let current = head;
    while (current != null) {
      if (current.data == x)
        return true;
      current = current.next;
    }
  }

  traverse() {
    let current = this.head;
    while (current) {
      // callback()
      console.log(current.data);
      current = current.next;
    }
  }
  traverseWithBool(boolean) {
    let current = this.head;
    while (current != null) {
      if (current.data == x)
        return true;
      current = current.next;
    }
    return false;
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