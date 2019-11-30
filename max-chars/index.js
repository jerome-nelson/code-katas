function maxChars(str) {
    const list = {};
    return str.split("").reduce((prev, curr, i) => {
        list[curr] = list[curr] + 1 || 1;
        return i > 1 && list[prev] > list[curr] ? prev : curr;
    }, "");
}

module.exports = maxChars;