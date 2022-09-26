const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

console.log("***** assertArraysEqual & middle test code");
assertArraysEqual(middle([1, 2, 3, 4]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
