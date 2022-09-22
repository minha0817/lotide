const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["minha", "chris", "yooni"];

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

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    // console.log("item BEFORE: ", item);
    // console.log("item AFTER: ", callback(item));
    // console.log("---");
    results.push(callback(item));
  }
  return results;
};

assertArraysEqual(
  map(words, (item) => item[0]),
  ["g", "c", "m", "t"]
);

assertArraysEqual(
  map(words1, (item) => item[0]),
  ["m", "c", "y"]
);
