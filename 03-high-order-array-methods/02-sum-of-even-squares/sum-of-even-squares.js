function sumOfEvenSquares(numbers) {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  const squareOfEvenNumbers = evenNumbers.map((num) => num ** 2);
  return squareOfEvenNumbers.reduce((sum, square) => sum + square, 0);
}

module.exports = sumOfEvenSquares;
