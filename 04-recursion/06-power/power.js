function power(base, exp) {
  if (exp == 0) return 1;
  if (exp == 1 || base == 1) return base;
  if (base == 0) return 0;

  return base * power(base, exp - 1);
}

module.exports = power;
