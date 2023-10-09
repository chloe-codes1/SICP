function square(x) {
  return x * x;
}

function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

function repeated(f, n) {
  if (n === 1) {
    return f;
  } else {
    return compose(f, repeated(f, n - 1));
  }
}

const repeatedSquare = repeated(square, 2);

const result = repeatedSquare(5);

console.log(result); // 625
