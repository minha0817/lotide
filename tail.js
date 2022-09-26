const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🥰 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😱 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const tail = function (words) {
  console.log(words.slice(1));
};

const words = ["Yo Yo"];
tail(words);
assertEqual(words.length, 3);

x = 12;
if (true) {
  x + 2;
  x = 4;
}
console.log(x);
