# Challenge Summary
<!-- Description of the challenge -->
stack-queue-brackets with Stephen M - code challenge 13

Multi-bracket Validation. write a function called validate brackets using a 'string' and returning a boolean, whether or not the brackets in the string are balanced.

## Whiteboard Process
<!-- Embedded whiteboard image -->
![UML](UML13codech.png))

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
We went with a O(n) approach.

## Solution
Show how to run your code, and examples of it in action -->
function validateBrackets(string) {
  let stack = [];
  let i = 0;

  for (i = 0; i < string.length; i++) {
    let character = stack[stack.length - 1];

    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {

      stack.push(string[i]);

    } else if ((character === '(' && string[i] === ')') ||
      (character === '{' && string[i] === '}') ||
      (character === '[' && string[i] === ']')) {
      stack.pop();
    } else return false;
  }
  return stack.length ? false : true;
}

# Challenge Summary
<!-- Description of the challenge -->
stack-queue-animal-shelter - Daniel Frey - code ch 12

## Whiteboard Process
<!-- Embedded whiteboard image -->
![UML Code Ch 12](codech12%20UML.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Our approach to this would be O(1), We would iterate through the code and did not use shortcut code.

Look at stack-queue-animal-shelter.js
Look at animalshelter.test.js

## Solution
<!-- Show how to run your code, and examples of it in action -->
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
}

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
  }

enqueue(animal) {
    animal.time = Date.now();
    switch (animal.species) {
    case 'dog':
      this.dogs.enqueue(animal);
      return;
    case 'cat':
      this.cats.enqueue(animal);
      return;
    default:
      throw new Error(`We don't serve that animal`);
    }
  }
  dequeue(pref = null) {
    switch (pref) {
    case 'dog':
      return this.dogs.dequeue();
    case 'cat':
      return this.cats.dequeue();
    case null:
      return this.dogs.front.value.time < this.cats.front.value.time
        ? this.dogs.dequeue()
        : this.cats.dequeue();
    default:
      throw new Error(`We don't serve that animal`);
    }
  }
}

# Challenge Summary
<!-- Description of the challenge -->
stack-queue-pseudo with Elain H - code ch 11

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

## Whiteboard Process
Embedded whiteboard image
![UML](UML%20CodeCH11.png))

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
 We went with a O(n) approach.

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
  }
}
