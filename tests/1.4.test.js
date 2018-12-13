const aPlusAbsB = require('../src/1.4');

test('should be true', () => {
  expect(aPlusAbsB(5, -4))
    .toBe(9);
  expect(aPlusAbsB(5, 4))
    .toBe(9);
  expect(aPlusAbsB(-5, -4))
    .toBe(-1);
  expect(aPlusAbsB(-5, 4))
    .toBe(-1);
});
