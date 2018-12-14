const sqrtIter = require('../src/1.7');

test('testing sqrtIter root', () => {
  expect(Number(sqrtIter(1, 9).toFixed(4))).toBe(3);
  expect(Number(sqrtIter(1, 16).toFixed(4))).toBe(4);
  expect(Number(sqrtIter(1, 1).toFixed(4))).toBe(1);
  expect(Number(sqrtIter(1, 0.9).toFixed(4))).toBe(0.9487);
  expect(Number(sqrtIter(1, 0.5).toFixed(4))).toBe(0.7071);
  expect(Number(sqrtIter(1, 0.1).toFixed(4))).toBe(0.3162);
  expect(Number(sqrtIter(1, 0.01).toFixed(4))).toBe(0.1);
  expect(Number(sqrtIter(1, 0.001).toFixed(4))).toBe(0.0316);
});
