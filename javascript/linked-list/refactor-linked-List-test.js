'use strict';

// const LinkedList = require('../linked-list/linkedList');
// const zipList = require('../linked-list/linkedList');


describe('Linked List - Code Ch 05', () => {
  let list = new LinkedList();
  it('Can successfully instantiate an empty linked list', () => {
    console.log('this is my list', list);
    expect(list).toBeInstanceOf(LinkedList);
    expect(list.head).toBeNull();
    expect(list.head).toBeFalsy();
  });
  it('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(6);
    list.insert(8);
    expect(list.head.value).toEqual(8);
    // expect(list.head.next.value).toEqual(3);
  });
  it('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.head.value).toEqual(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
    list.insert(3);
    expect(list.head.value).toEqual(3);

    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
  });
  it('Can properly insert multiple nodes into the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);

  });
  it('Will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.includes(2)).toEqual(true);
  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.includes(42)).toEqual(false);
  });
});

describe('Linked List Insertions - Code Ch 06', () => {
  let list = new LinkedList();
  it('Can successfully instantiate an empty linked list', () => {
    expect(list).toBeInstanceOf(LinkedList);
    expect(list.head).toBeNull();
    expect(list.head).toBeFalsy();
  });
  it('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    expect(list.toString())
      .toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> NULL');

  });
  it('Insert node before the node', () => {
    let list = new LinkedList();
    list.insertBefore(3, 9);
    expect(list.includes()).toEqual(true);
    expect(list.toString())
      .toEqual('{ 5 } -> { 4 } -> { 9 } -> { 3 } -> { 2 } -> { 1 } -> NULL');

    list.insertAfter(2, 55);
    expect(list.includes(55)).toEqual(true);
    expect(list.toString())
      .toEqual('{ 5 } -> { 4 } -> { 9 } -> { 3 } -> { 2 } -> { 55 } -> { 1 } -> NULL');

  });
});

// describe('Test to find the kth from the end element'), () => {
//   const list = new LinkedList();
//   it('k is a real number', () => {
//     expect(list.includes).toBeNull;
//   });

//   it('k is a real number', () => {
//     const list2 = new LinkedList();
//     expect(list2.includes()).toBeNull;
//   });
// };
//
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list
