const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(0, "0");
assertEqual("minha", "minha");
assertEqual(100, 1000);

assertEqual(head([]), 0);
assertEqual(head([0]), 0);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
