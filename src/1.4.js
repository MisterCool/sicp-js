function plus(a, b) { return a + b; }
function minus(a, b) { return a - b; }
function aPlusAbsB(a, b) {
  return (b > 0 ? plus : minus)(a, b);
}

module.exports = aPlusAbsB;
