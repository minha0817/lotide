const assertEqual = require("../assertEqual");
const head = require("../head");
const tail = require("../tail");
const eqArrays = require("../eqArrays");

console.log("***** assertEqual test code");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(0, "0");
assertEqual("minha", "minha");
assertEqual(100, 1000);

console.log("***** assertEqual & head test code");
assertEqual(head([]), 0);
assertEqual(head([0]), 0);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

console.log("***** assertEqual & tail test code");
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length, 3);

console.log("***** assertEqual & eqArrays test code");
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), true);
assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true);
