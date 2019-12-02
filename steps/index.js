// Solution 1 - Create a empty string with limit as whitespace.
// When looping through - replace specific amount of string with
// # char
function _steps(num) {
    let str = " ".repeat(num);

    if (num === 1) {
        console.log("#");
        return;
    }

    for (let i = 1; i <= num; i+=1) {
        str = "#".repeat(i) + str.slice(i);
        console.log(str);
    }
}

// Solution 2 - Recursive solution
function steps(num, row = 1) {
    if (row === num) {
        console.log(`#`.repeat(num));
        return;
    }
    console.log(`#`.repeat(row)+` `.repeat(num - row));
    steps(num, row + 1);
}


module.exports = steps;