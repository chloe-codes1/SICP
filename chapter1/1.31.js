// 주어진 구간의 입력에 대한 함숫값을 모두 곱한 결과를 return
function product(term, a, next, b) {
  // 범위 벗어나는지 확인
  if (a > b) {
    return 1;
  } else {
    // function의 값들을 곱해서 return
    return term(a) * product(term, next(a), next, b);
  }
}

// product 를 이용해서 factorial 계산
function factorial(n) {
  function identity(x) {
    return x;
  }
  function increase(x) {
    return x + 1;
  }

  return product(identity, 1, increase, n);
}

// π 의 근사값 계산 (wallis 곱)
function wallisProduct(n) {
  function term(i) {
    return (((2 * i) / (2 * i - 1)) * (2 * i)) / (2 * i + 1);
  }

  return 2 * product(term, 1, (x) => x + 1, n);
}

// Test 해보기
console.log("5! : ", factorial(5)); // 120
console.log("Wallis' product로 구한 π 근사값 : ", wallisProduct(100));
