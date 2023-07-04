const { PseudoQueue } = require('../stackQueuePseudo');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

describe('PseudoQueue', () => {
  describe('enqueue', () => {
    it('should enqueue values in the correct order', () => {
      const queue = new PseudoQueue();
      queue.enqueue(5);
      queue.enqueue(10);
      queue.enqueue(15);
      assert(queue.dequeue() === 5, 'Dequeued value should be 5');
      assert(queue.dequeue() === 10, 'Dequeued value should be 10');
      assert(queue.dequeue() === 15, 'Dequeued value should be 15');
    });
  });

  describe('dequeue', () => {
    it('should throw an error when dequeueing from an empty queue', () => {
      const queue = new PseudoQueue();
      expect(() => queue.dequeue()).toThrow('PseudoQueue is empty');
    });

    it('should dequeue values in the correct order', () => {
      const queue = new PseudoQueue();
      queue.enqueue(5);
      queue.enqueue(10);
      queue.enqueue(15);
      assert(queue.dequeue() === 5, 'Dequeued value should be 5');
      assert(queue.dequeue() === 10, 'Dequeued value should be 10');
      queue.enqueue(20);
      assert(queue.dequeue() === 15, 'Dequeued value should be 15');
      assert(queue.dequeue() === 20, 'Dequeued value should be 20');
    });
  });
});
