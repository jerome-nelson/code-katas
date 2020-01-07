// Initial Solution
function matrix(n) {
    const results = [];

    // CREATE ARRAY OF ARRAYS
    for (let i = 0; i < n; i+= 1) {
        results.push([]);
    }

    let counter = 1;
    let startCol = 0;
    let startRow = 0;
    let endCol = n - 1;
    let endRow = n - 1;

    while (startCol <= endCol && startRow <= endRow) {

        // Top Row
        for (let i = startCol; i <= endCol; i += 1) {
            results[startRow][i] = counter;
            counter += 1;
        }

        startRow += 1;

        // Right Row
        for (let i = startRow; i <= endRow; i += 1) {
            results[i][endCol] = counter;
            counter += 1;
        }

        endCol -= 1;

        for (let i = endCol; i >= startCol; i -=1) {
            results[endRow][i] = counter;
            counter += 1;   
        }

        endRow -= 1;

        for (let i = endRow; i >= startRow; i-= 1) {
            results[i][startCol] = counter;
            counter += 1;     
        }

        startCol += 1;
    }

    return results;
}

matrix(3);


module.exports = matrix;
