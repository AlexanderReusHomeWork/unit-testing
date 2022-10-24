const { subtract } = require("../script");

test("subtract 3 from 10 to be equal 7", () => {
  expect(subtract(10, 3)).toBe(7);
});

test("subtract 10 from 3 to be equal -7", () => {
  expect(subtract(3, 10)).toBe(-7);
});

test("subtract 10 from 10 to be equal 0", () => {
  expect(subtract(10, 10)).toBe(0);
});

test("subtract 0 from 0 to be equal 0", () => {
  expect(subtract(0, 0)).toBe(0);
});
