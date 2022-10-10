'use strict';

const { BinaryTree, BinarySearchTree } = require('./trees');

let binaryTreeTest = new BinaryTree();
binaryTreeTest.root = new Node(10);
binaryTreeTest.root.left = new Node(5);
binaryTreeTest.root.right = new Node(15);
binaryTreeTest.root.left.left = new Node(1);
binaryTreeTest.root.left.right = new Node(8);
binaryTreeTest.root.right.right = new Node(17);

let binarySearchTreeTest = new BinarySearchTree();
binarySearchTreeTest.root = new Node(10);
binarySearchTreeTest.root.left = new Node(5);
binarySearchTreeTest.root.right = new Node(15);
binarySearchTreeTest.root.left.left = new Node(1);
binarySearchTreeTest.root.left.right = new Node(8);
binarySearchTreeTest.root.right.right = new Node(17);

describe('Testing tree data structures', () => {
  test('Can successfully instantiate an empty tree', () => {
    const treeTest = new BinaryTree();

    expect(treeTest.value).toBe('null');
    expect(treeTest.left).toBe('null');
    expect(treeTest.right).toBe('null');
  });
  test('Can successfully instantiate a tree with a single root node', () => {
    const treeTest = new BinaryTree();
    treeTest.root = new Node(14);

    expect(treeTest.value).toBe('14');
    expect(treeTest.left).toBe('null');
    expect(treeTest.right).toBe('null');
  });
  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    const treeTest = new BinaryTree();
    treeTest.root = new Node(14);

    expect(treeTest.value).toBe('14');
    expect(treeTest.left).toBe('null');
    expect(treeTest.right).toBe('null');
  });
  test('Can successfully return a collection from a preorder traversal', () => {

  });
  test('Can successfully return a collection from an inorder traversal', () => {

  });
  test('Returns true	false for the contains method, given an existing or non-existing node value', () => {

  });
});
