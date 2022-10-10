'use strict';

const { BinaryTree } = require('./trees');

describe('Testing tree data structures', () => {
  test('Can successfully instantiate an empty tree', () => {
    const treeTest = new BinaryTree();

    expect(treeTest.value).toBe('null');
    expect(treeTest.left).toBe('null');
    expect(treeTest.right).toBe('null');
  });
  // test('Can successfully instantiate a tree with a single root node', () => {
  //   const treeTest = new BinaryTree();
  //   treeTest.root = new Node(14);

  //   expect(treeTest.value).toBe('14');
  //   expect(treeTest.left).toBe('null');
  //   expect(treeTest.right).toBe('null');
  // });
  // test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
  //   const treeTest = new BinaryTree();
  //   treeTest.root = new Node(14);

  //   expect(treeTest.value).toBe('14');
  //   expect(treeTest.left).toBe('null');
  //   expect(treeTest.right).toBe('null');
  // });
  // test('Can successfully return a collection from a preorder traversal', () => {

  // });
  // test('Can successfully return a collection from an inorder traversal', () => {

  // });
  // test('Returns true	false for the contains method, given an existing or non-existing node value', () => {

  // });

  test('Successfully returns highest value node', () => {
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

    let result = testTree.findMax();
    console.log(result);

    expect(result).toBe(11);

  });
});
