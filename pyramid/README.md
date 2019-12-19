## Instructions
Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character. Make sure the pyramid has spaces on the left and right side.

i.e
``` js
  pyramid(1)
      '#'
  pyramid(2)
      ' # '
      '###'
  pyramid(3)
      '  #  '
      ' ### '
      '#####'
```

## Solution Steps
* Iterate through N until zero
    - Create a empty string on each iteration with N number of spaces
    - Create a string with `#`
    - Take the empty string, navigate to the middle and replace equivalent amount of spaces
      with generated `#`.
    - Log generated string

* If recursive:
  - Exit case is `if N === <total amount of rows logged>`
