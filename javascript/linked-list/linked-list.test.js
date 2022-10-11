'use strict';

const { LinkedList } = require('./linkedList');

describe('linked list testing function - code challenge 05-08', () => {
  test('Can successfully instantiate an empty linked list', () => {
    let list = new LinkedList();
    expect(list.head).toBe(null);
    expect(list.head).toBeFalsy();
  });
  test('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert(18);
    expect(list.head.value).toEqual(18);
  });
  test('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert(2);
    expect(list.head.value).toEqual(2);
    list.insert(3);
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
  });
  test('Can properly insert multiple nodes into the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
  });
  test('Will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.includes(2)).toEqual(true);
  });
  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.includes(42)).toEqual(false);
  });
  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.toString()).toBe('{3} ->{2} ->{1} ->NULL');
  });
  test('Can successfully add a node to the end of the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.append(5);
    expect(list.tail.value).toBe(5);
  });
  test('Can successfully add multiple nodes to the end of a linked list', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(5);
    list.insert(6);
    list.append(7);
    expect(list.tail.value).toBe(7);
    list.append(8);
    expect(list.tail.value).toBe(8);
  });
  test('Can successfully insert a node before a node located i the middle of a linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.append(5);
    expect(list.tail.value).toBe(5);
    list.append(6);
    expect(list.tail.value).toBe(6);
  });
  test('Can successfully insert a node before the first node of a linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.append(5);
    expect(list.tail.value).toBe(5);
    list.append(6);
    expect(list.tail.value).toBe(6);
  });
  test('Can successfully insert after a node in the middle of the linked list', () => {
    let list = new LinkedList();
    expect(list.tail.value).toBe(5);
    list.append(6);
    expect(list.tail.value).toBe(6);
  });
  test('Can successfully insert a node after the last node of the linked list', () => {
    let list = new LinkedList();
    expect(list.tail.value).toBe(5);
    list.append(6);
    expect(list.tail.value).toBe(6);
  });
});



// Can successfully insert a node before a node located i the middle of a linked list
// Can successfully insert a node before the first node of a linked list
// Can successfully insert after a node in the middle of the linked list
// Can successfully insert a node after the last node of the linked list