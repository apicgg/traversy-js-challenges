function permutations(str) {
  const result = [];

  if (str.length === 0) {
    result.push("");
    return result;
  }

  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i];
    const restOfTheString = str.slice(0, i) + str.slice(i + 1);
    const subPerm = permutations(restOfTheString);

    for (let j = 0; j < subPerm.length; j++) {
      result.push(firstChar + subPerm[j]);
    }
  }

  return result;
}

module.exports = permutations;
