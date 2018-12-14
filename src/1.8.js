const cubeRoot = (guess, x) => {
  const goodEnough = (guess, x) => {
    return abs(cube(guess) - x) < 0.00001;
  };
  const abs = (x) => {
    return x >= 0 ? x : -x;
  };
  const cube = x => x * x * x;
  const div3 = (x, y) => {
    return (x + y) / 3;
  };
  const improve = (guess, x) => {
    return div3(x / (guess * guess), (2 * guess));
  };
  return goodEnough(guess, x) ? guess : cubeRoot(improve(guess, x), x);
};

module.exports = cubeRoot;
