// 'use strict';

// let LinkedList  = require('./linkedList');

// kth from end
// argument: a number, k, as a parameter.
// Return the node’s value that is k places from the tail of the linked list.
// You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

// describe('linked-list-kth - Code Ch 07', () => {
//   /*Driver program to test above methods */
//   let list = new LinkedList();
//   list.push(20);
//   list.push(4);
//   list.push(15);
//   list.push(35);

//   list.printNthFromLast(4);

//   it ('Can successfully add a node to the end of the linked list', () => {
//     expect(list.head.value).toBe(20);
//     expect(list.head.next.next.value).toBe(20);
//   });

// Where k is greater than the length of the linked list
// Where k and the length of the list are the same
// Where k is not a positive integer
// Where the linked list is of a size 1
// “Happy Path” where k is not at the end, but somewhere in the middle of the linked list