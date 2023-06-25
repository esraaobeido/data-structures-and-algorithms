'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.size++;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.size++;
    return this;
  }

  zipperList(list1, list2) {
    let tail = list1.head;
    let current1 = list1.head.next;
    let current2 = list2.head;
    let counter = 0;
  
    while (current1 && current2) {
      if (counter % 2 === 0) {
        tail.next = current2;
        current2 = current2.next;
      } else {
        tail.next = current1;
        current1 = current1.next;
      }
      tail = tail.next;
      counter++;
    }
    if (current1) {
      tail.next = current1;
    }
    if (current2) {
      tail.next = current2;
    }
  
    this.head = list1.head;
  
    return this; 
  }
  
  

  toString() {
    let currentNode = this.head;
    let string = '';
    while (currentNode?.value) {
      string = string + `{${currentNode.value}} -> `;
      currentNode = currentNode.next;
    }
    return string + 'NULL';
  }
}

module.exports = LinkedList;
