'use strict';

const BinaryTree = require('../tree-max/max-tree');
const Node = require('../tree-max/Node');

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);

const binaryTree = new BinaryTree(node1);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

console.log('Pre-order traversal:', binaryTree.preOrder());
console.log('In-order traversal:', binaryTree.inOrder());
console.log('Post-order traversal:', binaryTree.postOrder());
console.log('Maximum value:', binaryTree.getMax());
