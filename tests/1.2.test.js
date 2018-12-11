const result = require('../1.2.js');

test('show result -0.2....', () => {
  expect(result()).toBe(-0.24666666666666667);
  expect(result() === -0.24666666666666667).toBe(true);
});
