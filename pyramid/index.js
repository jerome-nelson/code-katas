// Solution 1
function pyramid(n) {

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

module.exports = pyramid;