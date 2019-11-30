const maxChars = require("./index");

describe("maxChars", () => {
    it("should be defined", () => {
        expect(maxChars).toBeDefined();
    });

    it("should return the characters with the highest count", () => {
        expect(maxChars("2213aaaaaaa")).toBe("a");
    });

    // it("should return an array for characters that are equally high", () => {
    //     expect(maxChars("2123344")).toBe(["3", "4"]);
    // });
});

