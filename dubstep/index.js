function songDecoder(original) {
    const search = "WUB";
    let transformed = original;
    let pointer = 0;
    
    while (pointer < original.length) {

        const position = transformed.indexOf(search);
        const nextSpace = transformed.slice(position -1, position);

        if (position > -1) {
            if (position <= 1) {
                transformed = original.replace(search, " ");
            } else {
                const padding = nextSpace.includes(" ") ? "" : " ";
                const start = transformed.slice(0, position);
                const end = transformed.slice(position+3);
                transformed = (start + padding + end);           
            }
        }
        pointer += 3;
    }
    
    return transformed.trim();
}


module.exports = songDecoder;