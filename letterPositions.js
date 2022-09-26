const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function (sentence) {
  const result = {};
  // logic to update results here
  let index = 0; //
  for (const letter of sentence) {
    //hello
    if (!result[letter]) {
      result[letter] = [index];
    } else {
      result[letter].push(index);
    }
    index += 1;
  }
  return result;
};

assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);

module.exports = letterPositions;
