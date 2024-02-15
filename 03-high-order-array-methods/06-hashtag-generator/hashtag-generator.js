function generateHashtag(str) {
  if (str.length === 0) return false;

  if (str.length > 140) return false;

  const string = str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");

  const hashTag = "#" + string;

  return hashTag;
}

module.exports = generateHashtag;
