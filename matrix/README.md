## Instructions
Write a function that accepts an integer N and returns a NxN spiral matrix.

i.e
``` js
  matrix(2)
    [[1, 2],
    [4, 3]]
  matrix(3)
    [[1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]]
 matrix(4)
    [[1,   2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8, 7]]
```

## Initial Solution
* Create a number counter beginning at `1`.
* Create row counter and a column counter.
* Create a `n * n` list
  - Generate `n` sub lists
* Look at first sub list of `n` and iterate `n` times 
  - Add numbers sequentially
  - Iterate counter until loop has ended
  - Iterate column.
* Loop until `n - 1` is reached
  - Add numbers sequentially to each `list[row][column]` using counter
  - Iterate counter.
  - Iterate row.
* Iterate from `n` to `0`.
  - Add numbers sequentially to `list[row][column]` using counter
  - Iterate counter until loop has ended
  - Decrement column.
* Loop until `n === 1` is reached 
  - Add numbers sequentially to `list[row][column]` using counter
  - Iterate counter until loop has ended
  - Decrement row.
* Loop until `n - 1` is reached
  - Add numbers sequentially to `list[row][column]` using counter
  - Iterate counter until loop has ended
  - Increment column.
  
* Loop until `n === 1` is reached
  - Add numbers sequentially to `list[row][column]` using counter
  - Iterate counter until loop has ended
  - Increment column.