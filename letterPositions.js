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

module.exports = letterPositions;
