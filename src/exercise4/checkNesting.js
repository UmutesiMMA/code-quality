function checkNestingLevel(arr) {
  if (!Array.isArray(arr)) return 0;
  let level =0;
  for (let i of arr) {
      if (Array.isArray(arr)) {
        level++;
      checkNestingLevel(i);
    }
  }
  return level;
}
function flatten(arr) {
  return arr.flat(checkNestingLevel(arr));
}
