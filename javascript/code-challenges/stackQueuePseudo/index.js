const { PseudoQueue } = require('./stackQueuePseudo');

const queue = new PseudoQueue();

queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);

console.log(queue.dequeue()); 
console.log(queue.dequeue()); 
console.log(queue.dequeue()); 

