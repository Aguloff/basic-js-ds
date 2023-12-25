const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.teil = null;
  }

  getUnderlyingList() {
   return this.head;
  }

  enqueue(value) {
    if (!this.teil) {
      this.teil = this.head = new Node(value);
    } else {
      let prevTeil = this.teil;
      this.teil = new Node(value);
      prevTeil.next = this.teil;
    }
  }

  dequeue() {
    let del = this.head;
   if (this.head === this.teil) {
    this.head = this.teil = null;
   } else {
    this.head = this.head.next;
   }
  return del.value;
  }
}

module.exports = {
  Queue
};
