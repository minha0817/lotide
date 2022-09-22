//--------assertArraysEqual-----------------------------//
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

//--------------takeUntil-----------------//
const takeUntil = function (array, callback) {
  const thingsToTake = [];
  for (let i = 0; i < array.length; i++) {
    const thing = array[i];
    const stopTakingThings = callback(thing);
    if (stopTakingThings) {
      return thingsToTake;
    } else {
      thingsToTake.push(thing);
    }
  }
  return thingsToTake;
};

//-----------------input------------------//
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);