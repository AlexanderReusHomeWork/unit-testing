const { multiply } = require("../script");

test("multiply 5 on 3 to be 15", () => {
  expect(multiply(5, 3)).toBe(15);
});

test("multiply 5 on 1 to be 5", () => {
  expect(multiply(5, 1)).toBe(5);
});

test("multiply 5 on 0 to be 0", () => {
  expect(multiply(5, 0)).toBe(0);
});
