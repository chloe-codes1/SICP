// 조합
function accumulate(combiner, nullValue, term, a, next, b) {
  if (a > b) {
    return nullValue;
  } else {
    return combiner(
      term(a),
      accumulate(combiner, nullValue, term, next(a), next, b)
    );
  }
}

// 합산
function sum(term, a, next, b) {
  return accumulate((x, y) => x + y, 0, term, a, next, b);
}

// 곱
function product(term, a, next, b) {
  return accumulate((x, y) => x * y, 1, term, a, next, b);
}

// Test 해보기
console.log(
  "1부터 10까지 더한 값: ",
  sum(
    (x) => x,
    1,
    (x) => x + 1,
    10
  )
);

console.log(
  "1부터 5까지 곱한 값: ",
  product(
    (x) => x,
    1,
    (x) => x + 1,
    5
  )
);
