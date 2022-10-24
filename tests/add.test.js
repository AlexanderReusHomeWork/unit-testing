const { add } = require("../script");

test("add`s 3 and 4 to be equal 7", () => {
  expect(add(3, 4)).toBe(7);
});

test("add`s 5 and 0 to equal 5", () => {
  expect(add(5, 0)).toBe(5);
});

test("add`s 0 and 0 to equal 0", () => {
  expect(add(0, 0)).toBe(0);
});
