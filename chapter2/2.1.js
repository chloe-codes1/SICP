function makeRat(n, d) {
  const g = gcd(n, d);
  return pair(n / g, d / g);
}

/*

양수뿐만 아니라 음수도 받도록 개선
- 유리수 양수이면? 분자, 분모 모두 양수가 되도록 정규화
- 유리수 음수이면? 분자만 음수가 되도록 정규화

*/

function improvedMakeRat(n, d) {
  // validation - n 이나 d가 0이면 error

  const posN = Math.abs(n);
  const posD = Math.abs(d);
  const posG = gcd(posN, posD);
  const sign = (n / posN) * (d / posD);

  return pair(sign * (posN / posG), posD / posG);
}
