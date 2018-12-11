const result = require('../1.2.js');

test('show result -0.2....', () => {
  expect(result().toBe(-0.24666666666666667));
});

test('is "-0.24666666666666667" equal to "result"?', () => {
  expect((result() === -0.24666666666666667).toBe(true));
});
