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

assertArraysEqual([1, 2, "3"], [1, 2, 3]);

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

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
