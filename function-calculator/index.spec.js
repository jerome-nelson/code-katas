

const funCalc = require("./index");

describe("funCalc", () => {
    it("should be defined", () => {
        expect(funCalc).toBeDefined();
    });

    describe("when calculating functions", () => {
        it("should return numbers when function is invoked", () => {
            expect(funCalc.seven()).toBe(7);
            expect(funCalc.one()).toBe(1);
        });

        it("should return calculations when operations are added", () => {
            expect(funCalc.seven(funCalc.times(funCalc.five()))).toBe(35);
            expect(funCalc.four(funCalc.plus(funCalc.nine()))).toBe(13);
            expect(funCalc.eight(funCalc.minus(funCalc.three()))).toBe(5);
            expect(funCalc.six(funCalc.dividedBy(funCalc.two()))).toBe(3);
        });
    });
});