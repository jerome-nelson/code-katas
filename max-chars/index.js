// Solution 1 - Split string and reduce into a single option
// by comparing the previous and the current option
// Once the previous option is bigger return this one instead as
// the accumulative value
function maxChars(str) {
    const list = {};
    return str.split("").reduce((prev, curr, i) => {
        list[curr] = list[curr] + 1 || 1;
        return i > 1 && list[prev] > list[curr] ? prev : curr;
    }, "");
}

module.exports = maxChars;