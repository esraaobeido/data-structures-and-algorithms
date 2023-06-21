'use strict';
const NewNode = require('./node');

class LinkedList {
  constructor() {
    this.head   = null;
    this.tail = null
    this.length = 0;
  }

  insertFirstNode(value) {
    this.head = new NewNode(value, this.head);
    this.length++;
}

  insertLastNode(value) {
    const newNode = new NewNode(value);
    if (!this.head) {
        this.head = newNode;
    } else {
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
    this.head = newNode;
    this.length++;
}

toString() {
  let currentNode = this.head;
  let output ='';

  while (currentNode) {
 output = ` ${output}${currentNode.value} ->  ` ;

      currentNode = currentNode.next;
  }
  console.log(`${output}null`);
}

  append(value) {

    if(!this.head) {

      this.head = new NewNode(value);
      this.length = this.length + 1;
    }else{
      let current = this.head;


      while(current.next) {
        current = current.next;
      }

      current.next = new NewNode(value);
      this.length = this.length + 1;

    }
  }

  insertBefore(value, newValue) {
    let newNode = new NewNode(newValue);
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode) {
      if (currentNode.value === value) {
        if (previousNode === null) {
          this.head = newNode;
          newNode.next = currentNode;
        } else {
          previousNode.next = newNode;
          newNode.next = currentNode;
        }
        this.length++;
this.tail=newNode;

        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  insertLastNode(value) {

    const newNode = new NewNode(value);

    if (!this.head) {
        this.head = newNode;
    } else {
        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }
    this.tail=newNode;
    this.length++;
}


  insertAfter(value, newValue) {
    let newNode = new NewNode(newValue);
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
        this.tail=newNode ;
        return;
      }
      currentNode = currentNode.next;
    }
  }
  getNodeAtIndex(index) {
    if (index > this.length) {
        console.log("index is greater than size of list");
        return null;
    }

    let currentNode = this.head;
    let counter = 0;

    while (counter < index) {
        currentNode = currentNode.next;
        counter++;
    }
  return currentNode.value ;

  }

  kthFromEnd(k) {
    if (k >= this.length || k < 0) {
      throw new Error('Invalid value of k');
    }
  
    let currentNode = this.head;
    let targetNode = this.head;
  
    for (let i = 0; i < k; i++) {
      targetNode = targetNode.next;
    }
  
    while (targetNode.next) {
      currentNode = currentNode.next;
      targetNode = targetNode.next;
    }
  
    return currentNode.value;
  }
}  

module.exports = LinkedList;