

function songDecoder(original) {
    let transformed = original;
    let pointer = 0;

    while (transformed.indexOf("WUB") > -1 || pointer >= original.length) {
        pointer = transformed.indexOf("WUB");
        let start = transformed.substr(0, 1);

        if (pointer - 1 > 0) {
            start = transformed.substr(0, pointer - 1);
        }

        const end = transformed.substr(pointer + 2);
        transformed = start + " " + end;
    }

    return transformed;
}

module.exports = songDecoder;