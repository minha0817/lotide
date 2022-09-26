const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["minha", "chris", "yooni"];
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

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

module.exports = map;
