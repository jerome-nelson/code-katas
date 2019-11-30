// 1. Easier implementation - convert to string to array, reverse array and combine
// Note: This could also use a `reduce` on the split Array to return a single string instead
function _reverse(str, options) {
    const settings = options ? options : {
        whitespace_preserve: false
    };

    const reversed = str.split("").reverse().join("");
    return !settings.whitespace_preserve ? reversed.trim() : reversed;
}

// 2. Harder Implementation - recursive function which is called until str length is 1
function __reverse(str, options) {
    const settings = options ? options : {
        whitespace_preserve: false
    };

    if (str.length <= 1) {
        return str;
    }


    const toReverse = !settings.whitespace_preserve ? str.trim() : str;
    return toReverse.slice(-1) + reverse(toReverse.slice(0, toReverse.length - 1), settings);
}

// 3. Implementation with For Loop - Loop through string one at a time - can be done because string is ArrayLike
function reverse(str, options) {
    const settings = options ? options : {
        whitespace_preserve: false
    };
    let reversed = "";

    for (char of str) {
        reversed = char + reversed;
    }

    return settings.whitespace_preserve ? reversed : reversed.trim();
}

module.exports = reverse;