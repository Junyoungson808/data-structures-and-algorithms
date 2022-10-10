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
    const traverse = (node) => {
      console.log(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
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
    };
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
    };
  }

  // breadth() {
  // }

  findMax() {
    return this.doFindMax(this.root);
  }
  doFindMax(node) {
    if (!node) {
      return;
    }
    let value = node.value;
    let leftValue = this.doFindMax(node.left);
    let rightValue = this.doFindMax(node.right);

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

  // add(value) {
  //   var newNode = new Node(value);
  //   if (this.root === null)
  //     this.root = newNode;
  //   else
  //     this.insertNode(this.root, newNode);
  // }

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

let testTree = new BinaryTree();

let node1 = new Node(2);
let node2 = new Node(7);
let node3 = new Node(2);
let node4 = new Node(6);
let node5 = new Node(5);
let node6 = new Node(11);
let node7 = new Node(5);
let node8 = new Node(9);
let node9 = new Node(4);
testTree.root = node1;
console.log(testTree);
node1.left = node2;
node2.left = node3;
node2.right = node4;
node4.left = node5;
node4.right = node6;
node1.right = node7;
node7.right = node8;
node7.left = node9;

testTree.findMax();

let theMax = testTree.findMax();
console.log(theMax);

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


