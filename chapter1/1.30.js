function sum(term, a, next, b) {
  function iter(a, result) {
    if (a > b) {
      return result;
    } else {
      return iter(next(a), result + term(a));
    }
  }
  return iter(a, 0); // 합산의 초기값이니까 0
}

/*

- term() function은 숫자를 변환
- a는 시작 숫자
- next() function은 다음 숫자로 넘어가는 역할 수행
- b는 종료점

*/

// Test 해보기
console.log(
  sum(
    (x) => x,
    1,
    (x) => x + 1,
    10
  )
); // 55를 return 한다

/*

조잡해 보이지만, 성능을 위해 꼬리 재귀 방식으로 구현하는 것은 의미가 있어 보임

*/
