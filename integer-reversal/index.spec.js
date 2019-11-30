const intReversal = require("./index");

describe("intReversal", () => {
    it("should be defined", () => {
        expect(intReversal).toBeDefined();
    });

    it("should print 0", () => {
        expect(intReversal(0)).toEqual(0);
    });

    it("should reverse a negative integer", () => {
        expect(intReversal(-5)).toEqual(-5);
        expect(intReversal(-15)).toEqual(-51);
        expect(intReversal(-90)).toEqual(-9);
        expect(intReversal(-2359)).toEqual(-9532);
    });

    it("should reverse a positive integer", () => {
        expect(intReversal(5)).toEqual(5);
        expect(intReversal(15)).toEqual(51);
        expect(intReversal(90)).toEqual(9);
        expect(intReversal(2359)).toEqual(9532);
    });

    it("should remove unsignificant figures from integer", () => {
        expect(intReversal(500)).toEqual(5);
        expect(intReversal(-50)).toEqual(-5);
    });
});
