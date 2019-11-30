function maxChars(str) {
    const list = {};

    for (char of str.split("")) {
        if (list[char]) {
            list[char] += 1;
            continue;
        }

        list[char] = 1;
    }

    return Object.keys(list).reduce((prev, curr, i, origin) => {
        const num = list[curr];
        for (char of origin) {
            if (num < list[char]) {
                return prev;
            }

            return curr;
        }


    }, "");
}

module.exports = maxChars;