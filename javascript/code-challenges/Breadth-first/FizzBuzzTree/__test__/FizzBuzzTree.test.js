'use strict';

const Node = require('../node');
const BinarySearchTree = require('../BST');
const fizzBuzzTree = require('../FizzBuzzTree');

describe('test fizzBuzzTree', () => {
  it('If the value is divisible by 3, replace the value with “Fizz”', () => {
    let value = new Node(3);
    let tree = new BinarySearchTree();
    tree.root = value;
    let expectedTree = fizzBuzzTree(tree);
    expect(expectedTree.root.value).toEqual('Fizz');
  });

  it('If the value is divisible by 5, replace the value with “Buzz”', () => {
    let value = new Node(5);
    let tree = new BinarySearchTree();
    tree.root = value;
    let expectedTree = fizzBuzzTree(tree);
    expect(expectedTree.root.value).toEqual('Buzz');
  });

  it('If the value is divisible by 3 and 5, replace the value with “FizzBuzz”', () => {
    let value = new Node(15);
    let tree = new BinarySearchTree();
    tree.root = value;
    let expectedTree = fizzBuzzTree(tree);
    expect(expectedTree.root.value).toEqual('FizzBuzz');
  });

  it('If the value is not divisible by 3 or 5, turn the number into a String', () => {
    let value = new Node(8);
    let tree = new BinarySearchTree();
    tree.root = value;
    let expectedTree = fizzBuzzTree(tree);
    expect(expectedTree.root.value).toEqual('8');
  });
});
