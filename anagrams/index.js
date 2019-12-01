const clean = (str) => str.toLowerCase().replace(/\W/, "");

// Solution 1 - strip all non-chars and then compare count
// if not the same then not anagram
// else iterate through first word char by character
// and check if second string has the same characters
function anagrams(str, comparison) {
    str = clean(str);
    comparison = clean(comparison);

    if(str.length !== comparison.length) {
        return false;
    }

    let checklist = comparison.split("");
    for (char of str) {
        const key = checklist.indexOf(char);
        if (key === -1) {
            return false;
        }

        checklist.splice(key, 1);
    }

    return true;
}

module.exports = anagrams;