const palindrome = require("./index");

describe("palindrome", () => {
    it("should be defined", () => {
        expect(palindrome).toBeDefined();
    });
    it("should assert truth when given a palindrome", () => {
        expect(palindrome("anna")).toBeTruthy();
        expect(palindrome("dog")).toBeFalsy();
        expect(palindrome("kayak")).toBeTruthy();
    });
    it("should normalise before comparison", () => {
        expect(palindrome("Kayak")).toBeTruthy();
    });
    it("should allow words that have spaces or dashes and compare appropiately", () => {
        expect(palindrome("rac-e-car")).toBeTruthy();
        expect(palindrome("rac e car")).toBeTruthy();
        expect(palindrome("rac-car")).toBeTruthy();
    });

});