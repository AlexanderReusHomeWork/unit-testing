const { power } = require("../script");

test("2 to the power of 3 to be 8", () => {
  expect(power(2, 3)).toBe(8);
});

test("2 to the power of 1 to be 2", () => {
  expect(power(2, 1)).toBe(2);
});

test("2 to the power of 0 to be 1", () => {
  expect(power(2, 0)).toBe(1);
});
