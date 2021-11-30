# Queues

Queues are an abstract data structure, somewhat similar to Stacks. Unlike stacks, a queue is open at both its ends. One end is always used to insert data (enqueue) and the other is used to remove data (dequeue). Queue follows a first-in-first-out methodology, i.e., the data item stored first will be accessed first.

A real-world example of queue can be a single-lane one-way road, where the vehicle enters first, exits first.

As with stacks, a queue can also be implemented using Arrays, Linked-lists, Pointers and Structures.

## Basic Operations

Queue operations may involve initializing or defining the queue, utilising it, and then completely erasing it from the memory. Here we shall try to understand the basic operations associated with queues:

- **Enqueue** - store an item to the queue.
- **Dequeue** - remove an item from the queue.

Few more functions are required to make the above-mentioned queue operation efficient. These are:

- **Peek** - Gets the element at the front of the queue without removing it.
- **isFull** - Checks if the queue is full.
- **isEmpty** - Checks if the queue is empty.

In queues, we always dequeue data, pointed by front pointer and while enqueing data in the queue we take help of rear pointer.
