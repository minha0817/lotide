const letterPositions = function (sentence) {
  const result = {};
  // logic to update results here
  let index = 0;
  for (const letter of sentence) {
    if (!result[letter]) {
      result[letter] = [index];
    } else {
      result[letter].push(index);
    }
    index += 1;
  }
  return result;
};

const eqArrays = function (arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🥰 Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`😱 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
