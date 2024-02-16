const isValidIPv4 = (ip) => {
  const ipArr = ip.split(".");

  if (ipArr.length !== 4) return false;

  return ipArr.every((bit) => {
    const num = parseInt(bit);
    return num >= 0 && num <= 255 && bit === num.toString();
  });
};

module.exports = isValidIPv4;
