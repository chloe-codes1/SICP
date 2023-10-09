/*

[ 연습 문제 ]

add(1)(2); // Function
add(1)(2)(4)(); // 7

add 함수를 작성해보세요

*/

// 1) 내 기준 최고 답
const add = (a) => (b) => {
  if (b === undefined) {
    return a;
  }

  return add(a + b);
};

// 2) oneliner ^-^
const add2 = (a) => (b) => b !== undefined ? add2(a + b) : a;

// 3)
function add3(a) {
  if (a === undefined) return 0;

  let sum = a;

  return function rec(b) {
    return b === undefined ? sum : ((sum += b), rec);
  };
}

const result1 = add3(1)(2);
console.log("result1: " + result1);

const result2 = add3(1)(2)(4)();
console.log("result2: " + result2);
