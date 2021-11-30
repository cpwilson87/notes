# Stacks

A stack is an Abstract Data Type (ADT), commonly used in most programming languages. It is named stack as it behaves like a real-world stack, for example - a deck of cards or a pole of plates.

A real-world stack allows operations at one end only. For example, we can place or remove a card or plate from the top of the stack only. Likewise, Stack ADT allows all data operations at one end only. At any given time, we can only access the top element of a stack.

This feature makes it LIFE data structure (Last-in-first-out). Here, the element which is placed (inserted or added) last, is accessed first. In stack terminology, insertion operation is called **PUSH** operation and removal operation is called **POP** operation.

A stack can be implemented by means of Array, Structure, Pointer and Linked List. Stack can either be a fixed size one or it may have a sense of dynamic resizing. Here, we are going to implement stack using arrays, which makes it a fixed size stack implementation.

## Basic Operations

Stack operations may involve initialising the stack, using it and then de-initializing it. Apart from these basic stuffs, a stack is used for the following two primary operations:

- **Push** - storing an element on the stack.
- **Pop** - removing an element from the stack.

To use a stack efficiently, we need to check the status of stack as well. For the same purpose, the following functionality is added to stacks:

- **Peek** - get the top data element of the stack, without removing it.
- **isFull** - check if stack is full
- **isEmpty** - check if stack is empty.

At all times, we maintain a pointer to the last pushed data on the stack. As this pointer always represents the top of the stack, hence named **top**. The **top** pointer provides the top value of the stack without actually removing it.
