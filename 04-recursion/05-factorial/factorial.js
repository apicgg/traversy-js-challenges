function factorial(num) {
  if (num == 0 || num == 1) return 1;

  // the current num * fact of the previous num
  return num * factorial(num - 1);
}

module.exports = factorial;
