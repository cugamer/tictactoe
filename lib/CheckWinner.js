exports.flattenArr = function(arr) {
  return arr.reduce(
    function(accumulator, cv) {
      return accumulator.concat(cv)
    },
    []
  );
}

exports.checkWinningBoard = function(arr, val) {
  let flatArr = this.flattenArr(arr);
  let root = Math.sqrt(flatArr.length);
  if (root % 1 != 0) { throw new Error("Input array total number of elements must be a perfect square") }
  let currentLDiagPos = 0;
  let currentRDiagPos = root - 1;
  let lDiagonal = flatArr[currentLDiagPos] === val;
  let rDiagonal = flatArr[currentRDiagPos] === val;


  for(let i = 0; i < root; i++) {
    for(let j = i; j < flatArr.length - root; j += root) {
      if (flatArr[j] != val || (flatArr[j] != flatArr[j + root])) { break; }
      if (j + (root * 2) >= flatArr.length) { return true; }
    }

    row = flatArr.slice(i * root, (i * root) + root)
    if (row[0] === val && !!row.reduce(function(a, b) { return (a === b) ? a : NaN; })) { return true; }

    let nextLDiagPos = i * root + i;
    let nextRDiagPos = (i + 1) * root - i - 1;

    if (flatArr[currentLDiagPos] === flatArr[nextLDiagPos]) {
        currentLDiagPos = nextLDiagPos;
      } else {
        lDiagonal = false;
    }

    if (rDiagonal && flatArr[currentRDiagPos] === flatArr[nextRDiagPos]) {
      currentRDiagPos = nextRDiagPos;
    } else {
      rDiagonal = false;
    }
  }
  if (lDiagonal || rDiagonal) { return true; }
  return false;
}
