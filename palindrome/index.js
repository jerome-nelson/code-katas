// Solution 1 - Compare from the beginning and end

// optimisation: We only iterate up till the middle - since I am comparing opposite ends
// there is no need to compare once we reach the middle
function palindrome(str) {
    const normStr = str.toLowerCase();
    return normStr.toLowerCase().split("").reduce((result, char, index, origin) => {
            if (result || index === Math.floor(origin.length / 2)) {
                result = char === normStr[origin.length - (index+1)];
            }
            return result;
        }, true);

}


const reverse = require("../string-reversal");

// Solution 2 - Check if reversed string is the same
function _palindrome(str) {
    str = str.toLowerCase();
    return str === reverse(str, { whitespace_preserve: true });
}

module.exports = palindrome;