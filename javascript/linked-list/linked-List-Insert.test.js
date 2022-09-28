'use strict';

let LinkedList  = require('./linkedList');

describe('linked-list-insertions - Code Ch 06', () => {

  let append1 = 18;
  let append2 = 19;
  let append3 = 20;

  // let insertBefore1 = 33;
  // let insertBefore2 = 44;
  // let insertBefore3 = 55;

  it ('Can successfully add a node to the end of the linked list', () => {
    let list = new LinkedList();

    list.append(append1);

    console.log('Append 1', list);

    expect(list.head.value).toBe(append1);
    expect(list.head.next).toBe(null);
  });

  // it ('Can successfully add multiple nodes to the end of a linked list', () => {
  //   let list = new LinkedList();

  //   list.append(append2);
  //   list.append(append3);
  //   list.append(append1);

  //   console.log('Append 2', list);

  //   expect(list.head.next.next.value).toBe(append3);
  //   expect(list.head.next.next.next.value).toBe(append1);
  // });


});

// Can successfully add a node to the end of the linked list XXXXXXXXXXXXX
// Can successfully add multiple nodes to the end of a linked list
// Can successfully insert a node before a node located i the middle of a linked list
// Can successfully insert a node before the first node of a linked list
// Can successfully insert after a node in the middle of the linked list
// Can successfully insert a node after the last node of the linked list

