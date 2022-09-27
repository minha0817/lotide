const countLetters = function (letters) {
  const result = {};
  for (const letter of letters) {
    if (result[letter] && letter !== " ") {
      result[letter] += 1;
    } else if (letter !== " ") {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;
