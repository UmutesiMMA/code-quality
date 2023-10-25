function checkNestingLevel(arr) {
    if (!Array.isArray(arr)) return 0;
    let maxLevel=0
    for (let i of arr) {
      if (Array.isArray(i)) {
        let currentLevel=checkNestingLevel(i);
        maxLevel= Math.max(currentLevel,maxLevel)
      }
    }
    return maxLevel+1
  }
  function flatten(arr) {
    return arr.flat(checkNestingLevel(arr));
  }  
