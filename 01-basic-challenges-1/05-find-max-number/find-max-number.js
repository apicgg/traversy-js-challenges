function findMaxNumber(num) {
  // let largestNumber = 0;

  // for (let i = 0; i <= num.length; i++) {
  //   if (num[i] > largestNumber) {
  //     largestNumber = num[i];
  //   }
  // }

  // return largestNumber;

  return Math.max(...num);
}

module.exports = findMaxNumber;
