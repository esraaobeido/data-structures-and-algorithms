"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  breadthFirst() {
    let result = [];
    let levelNodes = [this.root];
  
    while (levelNodes.length > 0) {
      let nextLevelNodes = [];
      for (let node of levelNodes) {
        result.push(node.value);
        if (node.left) nextLevelNodes.push(node.left);
        if (node.right) nextLevelNodes.push(node.right);
      }
      
      levelNodes = nextLevelNodes;
    }
  
    return result;
  }
}

module.exports = { BinaryTree, Node };
