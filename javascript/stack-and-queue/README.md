<!-- # Challenge Summary
<!-- Description of the challenge -->
<!-- stack-queue-pseudo with Elain H 

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue


## Whiteboard Process
<!-- Embedded whiteboard image -->
<!-- ![]()

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->


<!-- ## Solution
Show how to run your code, and examples of it in action -->

# Challenge Summary
<!-- Description of the challenge -->
stack-queue-animal-shelter - Daniel Frey

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
