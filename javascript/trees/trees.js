'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.left = null;
  }
};

class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.k = k;
    this.children = [];
  }
};

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const traverse = (node) => {
      console.log(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
  }

  inOrder() {
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      console.log(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
  }

  postOrder() {
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      traverse(this.root);
      console.log(node.value);
    }
  }

  // breadth() {
  // }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    var newNode = new Node(value);
    if (this.root === null)
      this.root = newNode;
    else
      this.insertNode(this.root, newNode);
  }

  contains(value) {
    if (this.value === value) {
      return this;
    }
    if (value < this.value && this.left) {
      return this.left.conains(value);
    } else if (value > this.value && this.right) {
      return this.right.contains(value);
    } else {
      return null;
    }
  }
}


module.export = {
  Node,
  KaryNode,
  BinaryTree,
  BinarySearchTree,
};
