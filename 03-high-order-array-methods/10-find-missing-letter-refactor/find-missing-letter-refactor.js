function findMissingLetter(arr) {
  // with forEach
  // let start = arr[0].charCodeAt(0);
  // let missingLetter = "";
  // arr.forEach((char, index) => {
  //   if (missingLetter === "") {
  //     let current = char.charCodeAt(0);
  //     if (index > 0 && current - start > 1) {
  //       missingLetter = String.fromCharCode(start + 1);
  //     }
  //     start = current;
  //   }
  // });
  // return missingLetter;

  // with map and find
  // let start = arr[0].charCodeAt(0);

  // const missingCharCode = arr
  //   .map((char) => char.charCodeAt(0))
  //   .find((current) => {
  //     if (current - start > 1) {
  //       return true;
  //     }
  //     start = current;
  //     return false;
  //   });

  // return missingCharCode ? String.fromCharCode(missingCharCode - 1) : "";

  // with filter
  // const missingCharCode = arr.filter((char, index) => {
  //   if (index === 0) return false;

  //   const prevCharCode = arr[index - 1].charCodeAt(0);

  //   const currentCharCode = char.charCodeAt(0);

  //   return currentCharCode - prevCharCode > 1;
  // })[0];

  // return missingCharCode
  // ? String.fromCharCode(missingCharCode.charCodeAt(0) - 1)
  //   : "";

  // with reduce
  let start = arr[0].charCodeAt(0);
  const missingCharCode = arr.reduce((missing, char) => {
    // `current` is the character code of the current character
    const current = char.charCodeAt(0);
    // if the current character code is more than one greater than the previous character code and `missing` is null then set `missing` to the character code of the missing character
    if (current - start > 1 && missing === null) {
      missing = start + 1;
    }
    // set `start` to the current character code
    start = current;
    // return `missing`
    return missing;
  }, null);
  // if `missingCharCode` is truthy then return the character that is one less than the character code
  return missingCharCode ? String.fromCharCode(missingCharCode) : "";
}

module.exports = findMissingLetter;
