const checkLargestElement = require("./problem");

describe("checkLargestElement", () => {
  test("should return the largest element in an array of positive numbers", () => {
    const nums = [1, 3, 9, 2];
    expect(checkLargestElement(nums)).toBe(9);
  });
  test("should return the largest element in an array of negative numbers", () => {
    const nums = [-7, -2, -5, -1];
    expect(checkLargestElement(nums)).toBe(-1);
  });
  test("should return the largest element in an array of mixed numbers", () => {
    const nums = [-7, 5, -5, 1];
    expect(checkLargestElement(nums)).toBe(5);
  });
  test("should return -1 when given an empty array", () => {
    const nums = [];
    expect(checkLargestElement(nums).toBe(-1));
  });
  test("should return -1 if the length of array has a single element", () => {
    const nums = [2];
    expect(checkLargestElement(nums).toBe(-1));
  });
  test("should return -1 is all elements in array are equal", () => {
    const nums = [2, 2, 2, 2];
    expect(checkLargestElement(nums).toBe(-1));
  });
});
