# calendar-matrix
Returns a two-dimensional array representing the days on a calendar

Accepts a year and month, or a Date instance, or no arguments, in which case the current date is used. Days from surrounding months are represented as negative numbers.

```js
res = matrix(2015, 0);
// or
res = matrix(new Date(2015, 0));
// or
res = matrix();

console.log(res);

// outputs
[
  [-28, -29, -30, -31, 1, 2, 3],
  [4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31]
]
```