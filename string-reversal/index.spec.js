const reverse = require("./index");

const VALUE = "advertisement";

describe("strReverse", () => {
    it("should be defined", () => {
        expect(reverse).toBeDefined();
    });
    it("given a string it should return the reverse order", () => {
        expect(reverse(VALUE)).toBe("tnemesitrevda");
    });
    describe("given a string with whitespace", () => {
        it("should trim if at the end or beginning of string", () => {
            expect(reverse(VALUE + "   ")).toEqual("tnemesitrevda");
            expect(reverse("   "+ VALUE)).toEqual("tnemesitrevda");
        });
        it("if whitespace option is set to true reverse should preserve these", () => {
            const options = {
                whitespace_preserve: true
            }
            expect(reverse(VALUE + " ", options)).toEqual(" tnemesitrevda");
            expect(reverse(" "+ VALUE, options)).toEqual("tnemesitrevda ");
        });
        // it("given whitespace is between characters it will always be preserved", () => {
        //     const NEW_VALUE = VALUE.replace("ad", "ad ");
        //     expect(reverse(NEW_VALUE + " ")).toEqual("tnemesitrev da");
        //     expect(reverse(" " + NEW_VALUE)).toEqual("tnemesitrev da");

        // });
      });
});