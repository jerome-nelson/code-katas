// Solution 1 - Compare from the beginning and end
function _palindrome(str) {
    const normStr = str.toLowerCase();
    return normStr.toLowerCase().split("").reduce((result, char, index, origin) => {
            if (result) {
                result = char === normStr[origin.length - (index+1)];
            }
            return result;
        }, true);

}


const reverse = require("../string-reversal");

// Solution 2 - Check if reversed string is the same
function palindrome(str) {
    str = str.toLowerCase();
    return str === reverse(str, { whitespace_preserve: true });
}

module.exports = palindrome;