function _firstLetterCapital(str) {
    return str[0].toUpperCase()+str.slice(1);
}

// Solution 1 - Captialize the first letter, and then loop through and capitalize
// if the previous character is a whitespace.
function capitalization(str) {
    return _firstLetterCapital(str).split("").map((elem, index) => {
        if (index > 0 && str[index - 1] === " ") {
            return elem.toUpperCase();
        }
        return elem;
    }).join("");
}

module.exports = capitalization;