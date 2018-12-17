const f = x => {
  if (x < 3) return x;
  return f(x - 1) + f(x - 2) + f(x - 3);
}

module.exports = f;
