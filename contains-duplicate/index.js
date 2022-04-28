/**
 * @param {number[]} nums
 * @return {boolean}
 */

// If this was an ordered list this could be optimised, like so:
const containsDuplicateOrderedList = function(nums) {
    let counter = [];
    for (const item of nums) {
        if (counter.length > 0 && counter.length >= item) {
            return true;
        }
        counter = Array(item).fill(0);
    }    

    return false;
};

const containsDuplicate = function(nums) {
    const map = {};
    for (const item of nums) {
        if (map[item]) {
            return map[item];
        }
        map[item] = true;
    }

    return false;
};

module.exports = {
    containsDuplicate,
    containsDuplicateOrderedList
}