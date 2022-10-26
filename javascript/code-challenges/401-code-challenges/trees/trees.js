'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.left = null;
  }
}

class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.k = k;
    this.children = [];
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let current = this.root;
    let arr = [];
    this.preOrderHelper(current, arr);
    return arr;
  }
  preOrderHelper(current, arr) {
    arr.push(current.value);
    if (current.left) {
      this.preOrderHelper(current.left, arr);
    }
    if (current.right) {
      this.preOrderHelper(current.right, arr);
    }
  }

  inOrder() {
    let current = this.root;
    let arr = [];
    this.inOrderHelper(current, arr);
    return arr;
  }
  inOrderHelper(current, arr) {
    if (current.left) {
      this.inOrderHelper(current.left, arr);
    }
    if (current.right) {
      this.inOrderHelper(current.right, arr);
    }
  }

  postOrder() {
    let current = this.root;
    let arr = [];
    this.postOrderHelper(current, arr);
    return arr;
  }
  postOrderHelper(current, arr) {
    if (current.left) {
      this.postOrderHelper(current.left, arr);
    }
    if (current.right) {
      this.postOrderHelper(current.right, arr);
    }
  }

  // breadthFirst(){}

  findMax() {
    return this.findMaxHelper(this.root);
  }
  findMaxHelper(node) {
    if (!node) {
      return;
    }
    let value = node.value;
    let leftValue = this.findMaxHelper(node.left);
    let rightValue = this.findMaxHelper(node.right);

    if (leftValue > value) {
      value = leftValue;
    }
    if (rightValue > value) {
      value = rightValue;
    }
    return value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    let current = this.root;
    while (current) {
      if (current.value > value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(value);
          return;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(value);
          return;
        }
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (this.value === value) {
        return true;
      }
      if (current.value > value) {
        if (current.left) {
          current = current.left;
        } else {
          return false;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          return false;
        }
      }
    }
  }
}


// testTree.root = new Node(2);
// testTree.root.left = new Node(7);
// root.right = new Node(5);
// root.left.right = new Node(6);
// root.left.right.left = new Node(1);
// root.left.right.right = new Node(11);
// root.right.right = new Node(9);
// root.right.right.left = new Node(4);

module.export = {
  Node,
  KaryNode,
  BinaryTree,
  BinarySearchTree,
};


