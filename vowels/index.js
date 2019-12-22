// Solution 1 - Initial Solution
function vowels1(str) {
    const lib = ["a", "e", "i", "o", "u"];
    let total = 0;
    for (const char of str.split("")) {
        if (lib.includes(char.toLowerCase())) {
            total += 1;
        }
    }

    return total;
}

// Solution 2 - Regular Expression
function vowels(str) {
    const list = str.match(/a|e|i|o|u/gi);
    return list ? list.length : 0;
}

module.exports = vowels;