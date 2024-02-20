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
  let start = arr[0].charCodeAt(0);

  const missingCharCode = arr
    .map((char) => char.charCodeAt(0))
    .find((current) => {
      if (current - start > 1) {
        return true;
      }
      start = current;
      return false;
    });

  return missingCharCode ? String.fromCharCode(missingCharCode - 1) : "";
}

module.exports = findMissingLetter;
