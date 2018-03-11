exports.flattenArr = function(arr) {
  return arr.reduce(
    function(accumulator, cv) {
      return accumulator.concat(cv)
    },
    []
  );
}

exports.check_winning_board = function(arr, val) {
  arr = this.flattenArr(arr);
  var root = Math.sqrt(arr.length);

  outer: for(var i = 0; i < root; i++) {
    inner: for(var j = i; j < arr.length - root; j += root) {
      if(arr[j] != val || (arr[j] != arr[j + root])) {
        break inner;
      }
      if(j + (root * 2) >= arr.length) {
        return true;
      }
    }
  }
  return false;
}
