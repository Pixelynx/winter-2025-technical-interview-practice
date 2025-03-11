// Write a function that takes the head node of a manually linked set of nodes. Reverse the direction of the next 
// pointers and return the new head node
// input: 1 -> 2 -> 3 -> null output: 3 -> 2 -> 1 -> null
// input: 1 -> null output: 1 -> null

// head will not be null;

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseNodes(head){
    // keep track of current node which starts with head
    let current = head;
    // keep track of previous node; starting with null
    let prev = null;
    // while there is a current node
    while (current) {
        // keep track of the current.next node
        console.log("Prev: ", prev)
        let nextNode = current.next;
        // point current.next to previous node [will be null if at start]
        current.next = prev;
        // point prev node to current node
        prev = current;
        // point current node to nextNode
        current = nextNode;
    } 

    return prev;
};
// 1 -> 2 -> 3 -> 4 -> 5 -> null
// current = node1
// prev = null

//nextNode = 2
// prev = nextNode = 2

const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;
const node3 = new Node(3);
node2.next = node3;
const node4 = new Node(4);
node3.next = node4;

let reversedHead = reverseNodes(node1);
let current = reversedHead;
console.log("1: ", node1)
while (current) {
    console.log(current.value);

    current = current.next;
}


module.exports = reverseNodes;