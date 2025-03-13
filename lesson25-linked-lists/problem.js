// Below we provided a partially completed linked list with the push and display method. Create the basic 
// operations for a linked list
// get method
    // given an index return the node at that index
    // if the index is less than zero or greater or equal to the length return null
    // return the node once found
// pop method 
    // removes the last node in the linked list and returns the new tail;
    // if the linked list is empty than return undefined
// shift method
    // if the linked list is empty return undefined
    // removed the first node in the linked list
    // returns the new head
// unshift method
    // takes a value and add the new node to the linked list
    // the head should be the new node
    // return the linked list
// insert method
    // given an index add a new node at that index
    // return linked list
// remove method
    // given an index remove the node at that index
    // return the node now at that index

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  shift() {
    if (!this.head) return undefined;

    this.head = this.head.next;

    return this.head;
  }

  unshift(data) {
    // make a new node with the data
    const newNode = new Node(data);
    
    // link the new node to the this.head
    newNode.next = this.head;
    // update head to be the new node
    this.head = newNode;
    
    // return the updated list
    return this;
  }

  pop(){
    if (!this.head) return undefined;
    // find the last el
    let node = this.head;
    while (node.next.next) {
      console.log(this.data)
      // decouple it from the linked list
      node = node.next;
    }
    // return the popped el
    let popped = node.next;
    node.next = null;

    return popped;
  }

  get(index) {
    if (!this.head || index < 0) return undefined;
    
    let node = this.head;
    let count = 0;
    
    while (count < index) {
      if (!node.next) return undefined;
      node = node.next;
      count++;
    }
    
    return node;
  }
  

  insert(index, data) {
    // if index is 0, this.head = data
    if (index === 0) this.head = data;
    
    // make the new node with data
    const newNode = new Node(data);
    
    // if list is empty or index is negative, return undefined
    if (!this.head || index < 0) return undefined;
    
    // find the node just before where we want to insert
    let current = this.head;
    let count = 0;
    
    while (count < index - 1) {
      // if we reach the end w.o finding index, return undefined
      if (!current.next) return undefined;
      // update current to current.next
      current = current.next;
      count++;
    }
    
    // link the new node between current and current.next
    newNode.next = current.next;
    current.next = newNode;
    
    return this;
  }

  remove(index) {
    // if there is no head or index is negative, return undefined
    if (!this.head || index < 0) return undefined;
    
    // removing the head
    if (index === 0) {
      const removedNode = this.head;
      this.head = this.head.next;
      return removedNode;
    }
    
    // find the node just before the one to remove
    let current = this.head;
    let count = 0;
    
    while (current.next && count < index - 1) {
      current = current.next;
      count++;
    }
    
    // if index doesn't exist
    if (count !== index - 1 || !current.next) return undefined;
    
    // save the node to be removed
    const removedNode = current.next;
    
    // update the current.next to skip over the node we're removing
    current.next = current.next.next;
    
    // return the removed node
    return removedNode;
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const createLinkedList = () => {
  const list = new LinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  return list;
};

const list = createLinkedList();

// console.log("Expected: ", 1);
// console.log(list.get(0))
// console.log("Expected: ", 2);
// console.log(list.get(0))
// console.log("Expected: ", 3);
// console.log(list.get(0))
console.log(list.remove(1))
module.exports = LinkedList;
