const tail = require("../tail");
const assertEqual = require("../assertEqual");

console.log("***** assertEqual & tail test code");
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length, 3);
