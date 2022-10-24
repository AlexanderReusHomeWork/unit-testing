const { divide } = require("../script");

test("divide 9 by 3 to be 3", () => {
  expect(divide(9, 3)).toBe(3);
});

test("divide 5 by 5 to be 1", () => {
  expect(divide(5, 5)).toBe(1);
});

test("divide 9 by 0 to be Infinity", () => {
  expect(divide(9, 0)).toBe(Infinity);
});
