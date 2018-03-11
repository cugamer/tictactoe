exports.flattenArr = function(arr) {
  return arr.reduce(
    function(accumulator, cv) {
      return accumulator.concat(cv)
    },
    []
  );
}

exports.check_winning_board = function(arr, val) {
  let flatArr = this.flattenArr(arr);
  let root = Math.sqrt(flatArr.length);
  if(root % 1 != 0) { throw new Error("Input array total number of elements must be a perfect square") }
  let lDiagStart = 0;
  let rDiagStart = root - 1;
  let lDiagonal = flatArr[lDiagStart] === val;
  let rDiagonal = flatArr[rDiagStart] === val;


  for(let i = 0; i < root; i++) {
    for(let j = i; j < flatArr.length - root; j += root) {
      if(flatArr[j] != val || (flatArr[j] != flatArr[j + root])) { break; }
      if(j + (root * 2) >= flatArr.length) { return true; }
    }

    row = flatArr.slice(i * root, (i * root) + root)
    if(row[0] === val && !!row.reduce(function(a, b) { return (a === b) ? a : NaN; })) { return true; }

    let nextLDiag = i * root + i;
    let nextRDiag = (i + 1) * root - i - 1;

    if(lDiagonal && nextLDiag <= flatArr.length) {
      if(flatArr[lDiagStart] === flatArr[nextLDiag]) {
        lDiagStart = nextLDiag;
      } else {
        lDiagonal = false;
      }
    }

    if(rDiagonal && flatArr[rDiagStart] === flatArr[nextRDiag]) {
      rDiagStart = nextRDiag;
    } else {
      rDiagonal = false;
    }
  }
  if(lDiagonal || rDiagonal) { return true; }
  return false;
}
