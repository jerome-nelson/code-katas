// Solution 1 - Take array and slice array in sub arrays based on chunk given. Recursive solution
function _chunk(list, chunks) {
    if (list.length <= chunks) {
        return [list];
    }

    return [].concat(
        [list.slice(0, chunks)],
        chunk(list.slice(chunks), chunks)
    );
}

// Solution 2 - Loop through array and slice into new sub array
function chunk(list, chunks) {
    const formattedList = [];

    for (let i = 0; i <= list.length - 1; i+= chunks) {
        formattedList.push(list.slice(i, i + chunks))
    }

    return formattedList;
}

module.exports = chunk;