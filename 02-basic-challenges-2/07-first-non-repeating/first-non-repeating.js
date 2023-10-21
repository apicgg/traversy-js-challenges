function findFirstNonRepeatingCharacter(str) {
  let charMap = {};
  for (let i = 0; i < str.length; i++) {
    charMap[str[i]] = ++charMap[str[i]] || 1;
  }
  console.log(charMap);

  for (let i = 0; i < str.length; i++) {
    if (charMap[str[i]] === 1) {
      return str[i];
    }
  }
  return null;
}

module.exports = findFirstNonRepeatingCharacter;
