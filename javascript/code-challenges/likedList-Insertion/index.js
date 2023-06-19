'use strict';
const linkedList = require('./lib/LinkedList');
const ll = new linkedList();
ll.append(10);
ll.append(20);
ll.append(30);

console.log(ll);

ll.insertBefore(20, 15);
ll.insertAfter(30, 35);

console.log(ll); 

