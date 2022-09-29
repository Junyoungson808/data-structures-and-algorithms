'use strict';

let LinkedList  = require('./linkedList');

describe('Linked List - Code Ch 05', () => {
  it ('Can successfully instantiate an empty linked list', () => {
    let list = new LinkedList();
    console.log('this is my list', list);
    expect(list).toBeInstanceOf(LinkedList);
    expect(list.head).toBeNull();
    expect(list.head).toBeFalsy();
  });
  it ('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(6);
    list.insert(8);
    expect(list.head.value).toEqual(8);
    // expect(list.head.next.value).toEqual(3);
  });
  it ('The head property will properly point to the first node in the linked list', () => {
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
});


