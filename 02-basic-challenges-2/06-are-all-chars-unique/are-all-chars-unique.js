function areAllCharactersUnique(str) {
  let charSet = new Set();

  for (const char of str) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
}

module.exports = areAllCharactersUnique;
