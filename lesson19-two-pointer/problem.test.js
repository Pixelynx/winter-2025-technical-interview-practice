const maxArea = require("./problem_");

describe("maxArea", () => {
  test("should return the maximum area of water that can be contained", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    expect(maxArea([1, 1])).toBe(1);
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  });
});
