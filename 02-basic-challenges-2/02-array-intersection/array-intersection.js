function arrayIntersection(arr1, arr2) {
  let newArr = [];

  // for (const num of arr1) {
  //   if (arr2.includes(num)) {
  //     newArr.push(num);
  //   }
  // }

  const set1 = new Set(arr1);

  for (const num of arr2) {
    if (set1.has(num)) {
      newArr.push(num);
    }
  }

  return newArr;
}

module.exports = arrayIntersection;
