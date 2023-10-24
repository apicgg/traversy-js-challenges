function formatPhoneNumber(arr) {
  const areaCode = arr.slice(0, 3).join("");
  const first = arr.slice(3, 6).join("");
  const second = arr.slice(6, 10).join("");

  return `(${areaCode}) ${first}-${second}`;
}

module.exports = formatPhoneNumber;
