# Challenge Summary
<!-- Description of the challenge -->
stack-queue-pseudo with Elain H

Create a new class called pseudo queue.
Do not use an existing Queue.
Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),
Internally, utilize 2 Stack instances to create and manage the queue
Methods:
enqueue
Arguments: value
Inserts value into the PseudoQueue, using a first-in, first-out approach.
dequeue
Arguments: none
Extracts a value from the PseudoQueue, using a first-in, first-out approach.

## Whiteboard Process
<!-- Embedded whiteboard image -->
![UML](UML%20CodeCH11.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
BigO: O(1)
We used the stack methods to reinact a Enqueue method in a Queue.

## Solution
<!-- Show how to run your code, and examples of it in action -->
class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    // stack 2 will be the reverse of stack 1, and will remove the first node from stack 1
    while (!this.stack1.isEmpty()) {
      // continue to push/pop until stack1 is empty...
      this.stack2.push(this.stack1.pop());
    }
    // stack2 now has all of stack1 nodes in reverse order
    let poppedNode = this.stack2.pop();
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
    return poppedNode;
