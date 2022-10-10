'use strict';

const { BinaryTree, BinarySearchTree } = require('./trees');

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
