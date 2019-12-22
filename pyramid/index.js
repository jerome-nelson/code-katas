// Solution 1 - Regular double loop
function pyramid3(n) {

  // Total Amount of Columns
  const total_width = n * 2 - 1;

  // Middle of Width (rounded down to nearest int)
  const middle = Math.floor(total_width/2);
  const columns = ` `.repeat(total_width).split("");

  // Iterate through row
  for (let i = 1; i <= n; i+=1) {

    // Calculate Total Range of # and lower/upper bounds
    const range = Math.floor((i > 1 ? i * 1.5 : i)/2);
    const start = middle - range;
    const end = middle + range;

    // Iterate through columns
    for (let j = 0; j < total_width; j+=1) {
      if (j >= start && j <= end) {
        columns[j] = '#';
      } else {
        columns[j] = ' ';
      }
    }

    console.log(columns.join(""));
  }
}

// Solution 2 - Recursive Solution
function pyramid2(n, current_row = 1) {

  // Total Amount of Columns
  const total_width = n * 2 - 1;

  // Hashes to Add
  let toAdd = current_row === 1 ? current_row
  : Math.round(current_row * 1.5);

  if (current_row === n) {
    console.log(`#`.repeat(total_width));
    return;
  }

  const space = Math.floor(total_width - toAdd)/2;
  const final = `#`.repeat(toAdd);

  console.log(
    final
      .padStart(space+final.length)
      .padEnd(space*2+final.length)
  );
  pyramid(n, current_row + 1);
}

// Alternative Recursive Solution - not using prototype functions
function pyramid(n, row = 0, level = '') {

  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const middle = Math.floor((2*n-1)/2)

  if (middle - row <= level.length && middle + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }


  pyramid(n, row, level + add);
}

module.exports = pyramid;