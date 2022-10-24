const { sqrt } = require("../script");

test("test sqrt of 9 to be 3", () => {
  expect(sqrt(9)).toBe(3);
});

test("test sqrt of 1 to be 1", () => {
  expect(sqrt(1)).toBe(1);
});

test("test sqrt of 0 to be 0", () => {
  expect(sqrt(0)).toBe(0);
});

test("test sqrt of -4 to be NaN", () => {
  expect(sqrt(-4)).toBe(NaN);
});
