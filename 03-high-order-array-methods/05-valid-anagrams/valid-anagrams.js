function validAnagrams(str1, str2) {
  // const countMap = {};

  // for (const letter of str1) {
  //   countMap[letter] = (countMap[letter] || 0) + 1;
  // }

  // for (const letter of str2) {
  //   if (!countMap[letter]) {
  //     return false;
  //   }
  //   countMap[letter] -= 1;
  // }

  // return Object.values(countMap).every((count) => count === 0);

  // ? with HOF

  const countMapOfStr1 = str1.split("").reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, {});

  const countMapOfStr2 = str2.split("").reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(countMapOfStr1).every(
    (letter) => countMapOfStr1[letter] === countMapOfStr2[letter]
  );
}

module.exports = validAnagrams;
