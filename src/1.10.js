function A(x, y) {
  return y === 0
    ? 0
    : x === 0
      ? 2 * y
      : y === 1
        ? 2
        : A(x - 1, A(x, y - 1));
}

console.log(A(3, 3));
console.log(A(1, 10));
console.log(A(2, 4));
