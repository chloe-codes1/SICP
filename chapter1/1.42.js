/*

두 개의 함수를 받아서 두 함수를 합성한 새로운 함수 만들기

*/

function square(x) {
  return x * x;
}

function inc(x) {
  return x + 1;
}

function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

// lambda로 해보기 -> 나는 이게 좋구먼
const compose = (f, g) => (x) => f(g(x));

// Test 해보기
const result = compose(square, inc)(6);
console.log(result); // 49
