# Binary Search

A binary search works by splitting a sorted array in half, determining which half contains the desired value and then splitting that half in half, and so on.

```javascript
[0, 5, 10, 12, 15, 19, 21, 22, 24, 30]

search for 12

start in the middle, is 19 === 21?, smaller, go left.

look in the middle of the left half, is 10 === 12? no, larger, go right.
look in the middle of the right half, is 12 === 12? yes
```
