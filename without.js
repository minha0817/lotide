const without = function (source, itemsToRemove) {
  const returnArray = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      returnArray.push(source[i]);
    }
  }

  return returnArray;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

module.exports = without;
