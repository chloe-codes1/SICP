/*

평활화: 그래프 상의 증감 폭을 0과 1의 절대적인 switch 로 변환하기 위해 사용
      -> 아날로그를 디지털로 바꿔줄 때 사용하는 식

*/

function smooth(f) {
  return (x) => f(x - dx) + f(x) + f(x + dx) / 3;
}
function n_smooth(n) {
  return repeated(smooth, n);
}

// Test 해보기
const result = n_smooth(3);
console.log(result);
