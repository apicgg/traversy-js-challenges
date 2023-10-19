function countVowels(str) {
  const formattedStr = str.toLowerCase(str);
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (const char of formattedStr) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

module.exports = countVowels;
