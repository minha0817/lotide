const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🥰 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😱 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = function (letters) {
  const result = {};
  for (const letter of letters) {
    console.log("letter:", letter);
    if (result[letter] && letter !== " ") {
      result[letter] += 1;
    } else if (letter !== " ") {
      result[letter] = 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));
