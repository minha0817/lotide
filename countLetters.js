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

console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;
