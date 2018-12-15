const sqrt = require('../src/1.7(improve1)');

test('testing sqrt', () =>{
  expect(Number(sqrt(0.9).toFixed(4))).toBe(0.9492);
  expect(Number(sqrt(0.5).toFixed(4))).toBe(0.7071);
  expect(Number(sqrt(0.1).toFixed(4))).toBe(0.3163);
  expect(Number(sqrt(0.01).toFixed(4))).toBe(0.1003);
  expect(Number(sqrt(0.001).toFixed(4))).toBe(0.0005);
});
