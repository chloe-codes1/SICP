/*

세 개의 수를 받고 셋 중 가장 작은 것을 제외한 두 수의 제곱들을 합한 결과를 돌려주는 함수를 선언하라

*/

function sumOfSquaresWithoutMin(num1, num2, num3) {
  const numbers = [num1, num2, num3];

  // 가장 작은 수를 찾기
  const min = Math.min(...numbers);

  // 가장 작은 수를 필터링하여 제외하고 제곱한 값들을 구한 후 합산
  const sum = numbers
    .filter((num) => num !== min)
    .map((num) => num * num)
    .reduce((acc, val) => acc + val, 0);

  return sum;
}
