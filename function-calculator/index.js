function times(number) {
    return function (initial) {
        return initial * number;
    }
}

function minus(number) {
    return function (initial) {
        return initial - number;
    }
}

function dividedBy(number) {
    return function (initial) {
        return initial / number;
    }
}

function plus(number) {
    return function (initial) {
        return initial + number;
    }
}

function numOp(operation, number = 0) {
    if (!operation) {
        return number;
    }

    return operation(number);
}

function one(operation) {
    return numOp(operation, 1);    
}

function two(operation) {
    return numOp(operation, 2);    
}

function three(operation) {
    return numOp(operation, 3);    
}

function four(operation) {
    return numOp(operation, 4);    
}

function five(operation) {
    return numOp(operation, 5);    
}

function six(operation) {
    return numOp(operation, 6);    
}

function seven(operation) {
    return numOp(operation, 7);    
}

function eight(operation) {
    return numOp(operation, 8);    
}

function nine(operation) {
    return numOp(operation, 9);    
}

module.exports = {
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    times,
    plus,
    minus,
    dividedBy
};