// Define square function
function square(x) {
  return x * x;
}

function smallestDivisor(n) {
  return findDivisor(n, 2);
}

function findDivisor(n, testDivisor) {
  if (square(testDivisor) > n) {
    return n;
  } else if (divides(testDivisor, n)) {
    return testDivisor;
  } else {
    return findDivisor(n, testDivisor + 1);
  }
}

function divides(a, b) {
  return b % a === 0;
}

// console.log(smallestDivisor(199)); // 199
// console.log(smallestDivisor(1999)); // 1999
console.log(smallestDivisor(19999)); // 7
