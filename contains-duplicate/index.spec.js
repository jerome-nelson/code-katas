
const duplicates = require("./index");

describe("containsDuplicate", () => {
    it("should be truthy", () => {
        expect(duplicates.containsDuplicate([1,2,3,1])).toBeTruthy();
        expect(duplicates.containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBeTruthy();
        expect(duplicates.containsDuplicate([1,2,3,1])).toBeTruthy();
    });
    it("should be falsy", () => {
        expect(duplicates.containsDuplicate([1,2,3,4])).toBeFalsy();
        expect(duplicates.containsDuplicate([0])).toBeFalsy();
    });
});

describe("containsDuplicateOrderedList", () => {
    it("should be truthy", () => {
        expect(duplicates.containsDuplicateOrderedList([1,2,3,1])).toBeTruthy();
        expect(duplicates.containsDuplicateOrderedList([1,1,1,3,3,4,3])).toBeTruthy();
        expect(duplicates.containsDuplicateOrderedList([1,1,1,2,2,3,])).toBeTruthy();
    });
    it("should be falsy", () => {
        expect(duplicates.containsDuplicateOrderedList([0])).toBeFalsy();
    });
});