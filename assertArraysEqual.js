// returns true if arrays equal. returns false if arrays not equal.
const eqArrays = function (arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

// if eqArrays is true, returns pass message.
// if eqArrays is false, returns fail message.
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🥰 Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`😱 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

assertArraysEqual([1, 2, "3"], [1, 2, 3]);
