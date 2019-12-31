module.exports = function (condition, statement) {
    if (condition) {
        console.log(statement + ': true');
        return;
    }
    console.assert(condition, statement);
    return;
}