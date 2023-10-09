function expmod(base, exp, m) {
  if (exp === 0) return 1;
  const temp = expmod(base, Math.floor(exp / 2), m) % m;
  return exp % 2 === 0 ? (temp * temp) % m : (base * temp * temp) % m;
}
