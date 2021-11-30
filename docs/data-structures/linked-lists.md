# Linked Lists

Linked lists are a data structure which do not use physical placement of data in memory. This means that, rather than indexed or positions, linked lists use a referencing system: elements are stored in nodes that contain a pointer to the next node, repeating until all nodes are linked.

This system allows efficient insertion and removal of items without hte need for reorganisation.

- Advantages
  - Efficient insertion and removal of new elements
  - Less complex than restructuring an array
- Disadvantages
  - Use more memory than arrays
  - Inefficient to retrieve a specific element
  - Inefficient to traverse the list backwards

The following are various types of linked list:

- **Simply Linked List** - Item navigation is forward only.
- **Doubly Linked List** - Items can be navigated forward and backward.
- **Circular Linked List** - Last item contains link of the first element as next and the first element has a link to the last element as previous.

## Basic Operations

- **Insertion** - Adds an element at the beginning of the list.
- **Deletion** - Deletes an element at the beginning of the list.
- **Display** - Displays the complete list.
- **Search** - Searches an element using the given key.
- **Delete** - Deletes an element using the given key.
