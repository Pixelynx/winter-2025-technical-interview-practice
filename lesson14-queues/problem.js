/**
 * Implement a class `Queue` with the following methods:
 *
 * 1. `enqueue(element)`: Adds an element to the end of the queue.
 * 2. `dequeue()`: Removes and returns the front element of the queue.
 * 3. `peek()`: Returns the front element without removing it.
 * 4. `isEmpty()`: Returns true if the queue is empty, otherwise false.
 * 5. `size()`: Returns the size of the queue.
 *
 * Please note that the time complexity of all methods are not optimal when using an array. But for the sake of simplicity,
 * you can use an array to implement the queue. If you're interested in learning more about the optimal implementation,
 * think about how you might use two stacks for optimal time complexity.
 */
// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element) {
//     return this.items.push(element);
//   }

//   dequeue() {
//     return this.items.length == 0 ? null : this.items.shift();
//   }

//   peek() {
//     return this.items.length == 0 ? null : this.items[0];
//   }

//   isEmpty() {
//     return this.items.length == 0;
//   }

//   size() {
//     return this.items.length;
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this._size = 0;
  }

  enqueue(element) {
    // If size is equal to 0, queue is empty
      // Front and read point to new Node with element passed in
    // Else this.rear.next points to new node
      // Rear also points to new node as it is last in queue
    
    const newNode = new Node(element);

    if (this._size === 0) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this._size++;
  }

  dequeue() {
    // If size is 0, return null
    // Save front value to variable to return later
    // Set front to next front
    // Decrement size
    // If queue becomes empty, set rear to null
    // Return dequeued value
    if (this._size === 0) return null;
    
    const dequeued = this.front.value;
    this.front = this.front.next;
    this._size--;
  
    if (this._size === 0) this.rear = null;

    return dequeued;
  }

  peek() {
    if (this._size === 0) return null;
    return this.front.value;
  }

  isEmpty() {
    return this._size === 0;
  }

  size() {
    return this._size;
  }
}

module.exports = Queue;
