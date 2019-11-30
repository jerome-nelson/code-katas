const maxChars = require("./index");

describe("maxChars", () => {
    it("should be defined", () => {
        expect(maxChars).toBeDefined();
    });

    it("should return the characters with the highest count", () => {
        expect(maxChars("2213aaaaaaa2")).toBe("a");
    });
});

