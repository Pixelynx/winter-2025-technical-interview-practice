// const Queue = require('./problem');

// describe('Queue', () => {
//   let queue;

//   beforeEach(() => {
//     queue = new Queue();
//   });

//   describe('enqueue()', () => {
//     test('adds a single element to the queue', () => {
//       queue.enqueue(10);
//       expect(queue.items).toEqual([10]); // Directly inspect the internal items array
//     });

//     test('adds multiple elements to the queue', () => {
//       queue.enqueue(10);
//       queue.enqueue(20);
//       queue.enqueue(30);
//       expect(queue.items).toEqual([10, 20, 30]);
//     });
//   });

//   describe('dequeue()', () => {
//     test('removes and returns the front element of the queue', () => {
//       queue.items = [10, 20, 30]; // Set up the queue state directly
//       const dequeued = queue.dequeue();
//       expect(dequeued).toBe(10);
//       expect(queue.items).toEqual([20, 30]);
//     });

//     test('returns null when dequeueing an empty queue', () => {
//       queue.items = []; // Set up an empty queue
//       const dequeued = queue.dequeue();
//       expect(dequeued).toBeNull();
//       expect(queue.items).toEqual([]);
//     });
//   });

//   describe('peek()', () => {
//     test('returns the front element without removing it', () => {
//       queue.items = [10, 20, 30]; // Set up the queue state directly
//       const front = queue.peek();
//       expect(front).toBe(10);
//       expect(queue.items).toEqual([10, 20, 30]); // Ensure queue remains unchanged
//     });

//     test('returns null when peeking an empty queue', () => {
//       queue.items = []; // Set up an empty queue
//       const front = queue.peek();
//       expect(front).toBeNull();
//     });
//   });

//   describe('isEmpty()', () => {
//     test('returns true for an empty queue', () => {
//       queue.items = []; // Set up an empty queue
//       expect(queue.isEmpty()).toBe(true);
//     });

//     test('returns false for a non-empty queue', () => {
//       queue.items = [10]; // Set up a non-empty queue
//       expect(queue.isEmpty()).toBe(false);
//     });
//   });

//   describe('size()', () => {
//     test('returns 0 for an empty queue', () => {
//       queue.items = []; // Set up an empty queue
//       expect(queue.size()).toBe(0);
//     });

//     test('returns the correct size for a non-empty queue', () => {
//       queue.items = [10, 20, 30]; // Set up the queue state directly
//       expect(queue.size()).toBe(3);
//     });
//   });
// });

const Queue = require('./problem');


describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('should initialize an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
  });

  test('should enqueue elements', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.size()).toBe(2);
  });

  test('should dequeue elements in FIFO order', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.isEmpty()).toBe(true);
  });

  test('should return null when dequeuing from an empty queue', () => {
    expect(queue.dequeue()).toBeNull();
  });

  test('should peek at the front element without dequeuing', () => {
    queue.enqueue(5);
    queue.enqueue(10);
    expect(queue.peek()).toBe(5);
    expect(queue.size()).toBe(2);
  });

  test('should return null when peeking an empty queue', () => {
    expect(queue.peek()).toBeNull();
  });
});