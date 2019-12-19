const pyramid = require("./index");

describe("pyramid", () => {
    it("should be defined", () => {
        expect(pyramid).toBeDefined();
    });
    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        console.log.mockRestore();
    });

    it('prints a pyramid for n = 2', () => {
        pyramid(2);
        expect(console.log.mock.calls[0][0]).toEqual(' # ');
        expect(console.log.mock.calls[1][0]).toEqual('###');
        expect(console.log.mock.calls.length).toEqual(2);
    });

    it('prints a pyramid for n = 3', () => {
        pyramid(3);
        expect(console.log.mock.calls[0][0]).toEqual('  #  ');
        expect(console.log.mock.calls[1][0]).toEqual(' ### ');
        expect(console.log.mock.calls[2][0]).toEqual('#####');
        expect(console.log.mock.calls.length).toEqual(3);
    });

    it('prints a pyramid for n = 4', () => {
        pyramid(4);
        expect(console.log.mock.calls[0][0]).toEqual('   #   ');
        expect(console.log.mock.calls[1][0]).toEqual('  ###  ');
        expect(console.log.mock.calls[2][0]).toEqual(' ##### ');
        expect(console.log.mock.calls[3][0]).toEqual('#######');
        expect(console.log.mock.calls.length).toEqual(4);
    });
});