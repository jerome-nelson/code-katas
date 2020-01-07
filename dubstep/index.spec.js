const dubstep = require("./index");

describe("dubstep", () => {
    it("should be defined", () => {
        expect(dubstep).toBeDefined();
    });
    it("WUB should be replaced by 1 space", () => {
        expect(dubstep("AWUBBWUBC")).toBe("A B C");
    });
    it("multiples WUB should be replaced by only 1 space", () => {
        expect(dubstep("AWUBWUBWUBBWUBWUBWUBC")).toBe("A B C");
    });
    it("heading or trailing spaces should be removed", () => {
        expect(dubstep("WUBAWUBBWUBCWUB")).toBe("A B C");
    });
});