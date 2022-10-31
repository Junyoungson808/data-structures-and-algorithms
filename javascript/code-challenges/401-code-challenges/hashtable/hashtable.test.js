'use strict';

const HashTable = require('./index');

describe('Testing Hashtable structures', () => {
  test('Can successfully instantiate a Hashtable', () => {
    const table = new HashTable(800);
    expect(table).toBeTruthy();
  });
  test('Can successfully instantiate a empty Hashtable', () => {
    const table = new HashTable(0);
    expect(table).toEqual({ "size": 0, "table": [] });
  });
});

describe('Testing Hashtable methods', () => {
  test('Can successfully insert into Hashtable', () => {
    const table = new HashTable(100);
    table.set('Monkey D.', 'Luffy');
    table.set('Gold D.', 'Rogers');
    table.set('Roronoa', 'Zoro');
    table.set('Vinsmoke', 'Sanji');
    expect(table.get('Monkey D.')).toEqual('Luffy');
    expect(table.get('Gold D.')).toEqual('Rogers');
    expect(table.get('Roronoa')).toEqual('Zoro');
    expect(table.get('Vinsmoke')).toEqual('Sanji');
  });
});
