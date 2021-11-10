# Queues

Queues are conceptually similar to stacks; both are sequential structures, but queues process elements in the order they were entered rather than the most recent element.

As a result, queues can be thought of as a FIFO (first in, first out) version of stacks. These are helpful as a buffer for requests, storing each request in the order it was received until it can be processed.

For a visual, consider a single-lane tunnel: the first car to enter is the first car to exit. If other cars should wish to exit, but the first stops, all cars will have to wait for the first to exit before they can proceed.

- Advantages
  - Dynamic size
  - Orders data in the order it was received
  - Low runtime
- Disadvantages
  - Can only retrieve the oldest element

Queues come with common methods:

- enqueue - add data to queue
- dequeue - remove data from the queue
- peek - retrieves the value at the top of the queue without removing it
- contains - searches through the queue returning a boolean
