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
    this.tail = null;
    this.count = 0;
  }

  insert(value) {
    // try {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.count = this.count + 1;
    } else {
      let nextValue = this.head;
      this.head = newNode;
      newNode.next = nextValue;
      this.count = this.count + 1;
    }
    // } catch (e) {
    //   console.log(`couldnt insert a value, ${e}`);
    //   throw `couldn't insert a value, ${e}`;
    // }
  }

  insertBefore(value, newValue) {
    // try {
    let newNode = new Node(newValue);
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.value !== value) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    newNode.next = currentNode;
    if (previousNode) {
      previousNode.next = newNode;
      this.count = this.count + 1;
    } else {
      this.head = newNode;
      this.count = this.count + 1;
    }
    // } catch (e) {
    //   console.log(`couldnt insert a value, ${e}`);
    //   throw `couldn't insert a value, ${e}`;
    // }
  }

  insertAfter(value, newValue) {
    // try {
    let newNode = new Node(newValue);
    let currentNode = this.head;
    let nextNode = currentNode.next;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
      nextNode = currentNode.next;
    }
    newNode.next = nextNode;
    currentNode.next = newNode;
    this.count = this.count + 1;
    // } catch (e) {
    //   console.log(`couldnt insert a value, ${e}`);
    //   throw `couldn't insert a value, ${e}`;
    // }
  }

  append(value) {
    let newNode = new Node(value);
    // try {
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.count = this.count + 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.count = this.count + 1;
    }
    // } catch (e) {
    //   console.log(`couldnt insert a value, ${e}`);
    //   throw `couldn't insert a value, ${e}`;
    // }
  }

  includes(value) {
    // try {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
    // } catch (e) {
    //   console.log(`couldnt insert a value, ${e}`);
    //   throw `couldn't insert a value, ${e}`;
    // }
  }

  kthFromEnd(k) {
    // try {
    if (k === 0) {
      return this.tail.value;
    }
    if (k < 0) {
      return console.log('input should be a positive number');
    }
    let position = this.count - k;
    if (position < 1) {
      return console.log(`linked list has less thatn ${k} nodes`);
    }
    let currentNode = this.head;
    for (let i = 1; i < position; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
    // } catch (e) {
    //   console.log(`couldnt insert a value, ${e}`);
    //   throw `couldn't insert a value, ${e}`;
    // }
  }

  toString() {
    // try {
    let string = '';
    let currentNode = this.head;
    while (currentNode) {
      let stringValue = `{${currentNode.value}} ->`;
      string = string + stringValue;
      currentNode = currentNode.next;
    }
    string = string + 'NULL';
    return string;
    // } catch (e) {
    //   console.log(`couldnt insert a value, ${e}`);
    //   throw `couldn't insert a value, ${e}`;
    // }
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
