const f = require('../src/1.11');

test('some another test function f', () => {
  expect(f(0)).toBe(0);
  expect(f(-1)).toBe(-1);
  expect(f(2)).toBe(2);
  expect(f(3)).toBe(3);
  expect(f(4)).toBe(6);
  expect(f(5)).toBe(11);
  expect(f(6)).toBe(20);
  expect(f(7)).toBe(37);
  expect(f(8)).toBe(68);
});
