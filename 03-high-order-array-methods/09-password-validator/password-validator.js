function validatePassword(password) {
  const passwordArr = password.split("");

  const isLengthValid = password.length >= 8;

  const hasUppercase = passwordArr.some(
    (char) => char === char.toUpperCase() && char !== char.toLowerCase()
  );

  const hasLowercase = password
    .split("")
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

  const hasDigit = password
    .split("")
    .some((char) => !isNaN(parseInt(char, 10)));

  return isLengthValid && hasUppercase && hasLowercase && hasDigit;
}

module.exports = validatePassword;
