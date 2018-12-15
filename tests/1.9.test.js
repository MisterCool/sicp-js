const plus = require('../src/1.9');
const plus2 = require('../src/1.9');

test('plus iter', () => {
  console.time('iter');
  expect(plus(4, 5)).toBe(9);
  expect(plus(0, 5)).toBe(5);
  expect(plus(10, -100)).toBe(-90);
  expect(plus(10000, 0)).toBe(10000);
  console.timeEnd('iter');
});

test('plus2 recursive', () => {
  console.time('recursive');
  expect(plus2(4, 5)).toBe(9);
  expect(plus2(0, 5)).toBe(5);
  expect(plus2(10, -100)).toBe(-90);
  expect(plus2(10000, 0)).toBe(10000);
  console.timeEnd('recursive');
});
