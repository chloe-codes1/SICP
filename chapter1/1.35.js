// 오차 정의
const tolerance = 0.00001;

// 고정점 프로시저!!!
function fixedPoint(f, firstGuess) {
  function closeEnough(v1, v2) {
    return Math.abs(v1 - v2) < tolerance;
  }

  function tryGuess(guess) {
    const next = f(guess);
    if (closeEnough(guess, next)) {
      // tolerence 내에 도달하면 return
      return next;
    } else {
      // 다음 추측값으로 재귀 호출
      return tryGuess(next);
    }
  }

  return tryGuess(firstGuess);
}

// 황금 비 계산
function goldenRatio(x) {
  return 1 + 1 / x;
}

// 고정점 프로시저를 활용하여 황금 비율 계산
const phi = fixedPoint(goldenRatio, 1.0);

console.log(phi); // 1.6180327868852458

/*

어떤 수 x에서 1에 x의 역수를 더하면 그 값이 x와 같아지는 경우를 황금비라고 하는듯

고정점을 이용해서 황금비를 계산하는 방식인데...! 잘 모르겠다 훔냐

*/
