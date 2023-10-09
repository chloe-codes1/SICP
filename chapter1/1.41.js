/*

함수 하나를 인자로 받고, 그 함수를 두 번 적용하여 새로운 함수를 return 하는 double 함수 선언 

*/

function double(func) {
  return function (x) {
    return func(func(x));
  };
}

function inc(x) {
  return x + 1;
}

/* 

다음 문장의 함수 적용 표현식이 돌려주는 값 구하기!

double(double(double))(inc)(5);

*/

const result = double(double(double))(inc)(5);
console.log(result); // 21
