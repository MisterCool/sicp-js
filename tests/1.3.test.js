const sumOfTree = require('../src/1.3');

test('summ of 1, 2, 3 equal 6', () => {
  expect(sumOfTree(1, 2, 3)).toBe(6);
});

test('summ of -1, -2, -3 equal -6', () => {
  expect(sumOfTree(-1, -2, -3)).toBe(-6);
});

test('summ of -1, 0, 23 equal 22', () => {
  expect(sumOfTree(-1, 0, 23)).toBe(22);
});
