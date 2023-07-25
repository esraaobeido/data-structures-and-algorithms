'use strict';

const BinaryTree = require('./binaryTree');

const Node = require('./node');

function fizzBuzzNewTree(value) {
  let valueToString;
  if (value % 15 === 0) {
    valueToString = 'FizzBuzz';
  } else if (value % 3 === 0) {
    valueToString = 'Fizz';
  } else if (value % 5 === 0) {
    valueToString = 'Buzz';
  } else {
    valueToString = value.toString();
  }
  return valueToString;
}

function depthFirst(node) {
  if (!node) return null;
  const newNode = new Node(fizzBuzzNewTree(node.value));
  newNode.left = depthFirst(node.left);
  newNode.right = depthFirst(node.right);
  return newNode;
}

function fizzBuzzTree(tree) {
  if (!tree.root) return null;

  const newTree = new BinaryTree();
  newTree.root = depthFirst(tree.root);

  return newTree;
}

module.exports = fizzBuzzTree;
