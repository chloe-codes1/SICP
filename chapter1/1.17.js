function even(n) {
  return n % 2 === 0;
}

function double(x) {
  return x * 2;
}

function halve(x) {
  return x / 2;
}

function calc(a, b) {
  if (b === 0) return 0;
  if (b % 2 === 0) return calc(a * 2, b / 2);
  return a + calc(a, b - 1);
}

console.log(calc(17, 19)); // 323
