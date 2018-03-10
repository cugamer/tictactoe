exports.flattenArr = function(arr) {
  return arr.reduce(
    function(accumulator, cv) {
      return accumulator.concat(cv)
    },
    []
  );
}

// module.exports = flattenArr
