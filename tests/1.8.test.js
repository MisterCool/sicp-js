const cubeRoot = require('../src/1.8');

test('testing sqrCube', () =>{
  expect(Number(cubeRoot(1, 1).toFixed(4))).toBe(1);
  expect(Number(cubeRoot(1, 8).toFixed(4))).toBe(2);
  expect(Number(cubeRoot(1, 27).toFixed(4))).toBe(3);
  expect(Number(cubeRoot(1, 64).toFixed(4))).toBe(4);
  expect(Number(cubeRoot(1, 125).toFixed(4))).toBe(5);

  expect(Number(cubeRoot(1, 0.1).toFixed(4))).toBe(0.4642);
  expect(Number(cubeRoot(1, 0.01).toFixed(4))).toBe(0.2155);
  expect(Number(cubeRoot(1, 0.001).toFixed(4))).toBe(0.1);

  expect(Number(cubeRoot(1, 1000000).toFixed(4))).toBe(100);
  expect(Number(cubeRoot(1, 9999999).toFixed(4))).toBe(215.4435);
});
