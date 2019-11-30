// Solution 1 - reverse as a string and then parse result as Int
// uses string reversal solution
const reverse = require("../string-reversal/index");
function intReversal(num) {
    const numStr = num.toString();
    const result = parseInt(reverse(numStr), 10);
    return numStr.length > 1 ? Math.floor(result * Math.sign(num)) : num;
}

module.exports = intReversal;