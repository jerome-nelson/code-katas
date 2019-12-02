// Solution - Create a empty string with limit as whitespace.
// When looping through - replace specific amount of string with
// # char
function steps(num) {
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

module.exports = steps;