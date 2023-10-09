function deriv(g) {
  const dx = 0.00001;
  return (x) => (g(x + dx) - g(x)) / dx;
}
function newton_transform(g) {
  return (x) => x - g(x) / deriv(g)(x);
}
function newtons_method(g, guess) {
  return fixed_point(newton_transform(g), guess);
}
function cubic(a, b, c) {
  return (x) => x * x * x + a * (x * x) + b * x + c;
}
console.log(newtons_method(cubic(1, 2, 3), 1));

/*

함수를 이용한 추상화

*/
