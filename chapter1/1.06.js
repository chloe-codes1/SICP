function condition(predicate, thenClause, elseClause) {
  return predicate ? thenClause : elseClause;
}

condition(2 === 3, 0, 5);

condition(1 === 1, 0, 5);

function squareIter(guess, x) {
  condition(goodEnough(guess, x), guess, squareIter(improve(guess, x), x));
}
