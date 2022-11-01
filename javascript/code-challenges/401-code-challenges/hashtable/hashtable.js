'use strict';

module.exports = class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] === value;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  get(key) {
    const target = this._hash(key);
    if (this.table[target]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[target][i][0] === key) {
          return this.table[target][i][1];
        }
      }
    }
    return undefined;
  }

  has(key) {
    const index = this._hash(key);
    let bucketAti = this.table[index];
    if (bucketAti) {
      return true;
    }
    return false;
  }

  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }
};
