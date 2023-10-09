function f(g) {
  // validation

  return g(2);
}

function square(x) {
  return x * x;
}

const result1 = f(square);
console.log(result1); // 결과: 4

const result2 = f((z) => z * (z + 1));
console.log(result2); // 결과: 6

// 평가하는 도중 오류 발생 - "TypeError: g is not a function"
f(f);

/*

f는 인자로 받은 function에 2를 넘겨주는 역할을 하기 때문에 f(f)는 f(2) 랑 같아진다
but, f(2) 에서 2는 funciton이 아니기 때문에 타입 에러 발생!!

*/
