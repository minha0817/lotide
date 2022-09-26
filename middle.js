const middle = function (arr) {
  const midArr = [];

  if (arr.length > 1 && arr.length % 2 !== 0) {
    let midElement = arr[Math.floor(arr.length / 2)];
    midArr.push(midElement);
  }

  if (arr.length > 2 && arr.length % 2 === 0) {
    const midNum = Math.floor(arr.length / 2);

    let midElement1 = arr[midNum - 1];
    midArr.push(midElement1);

    let midElement2 = arr[Math.floor(arr.length / 2)];
    midArr.push(midElement2);
  }
  return midArr;
};

module.exports = middle;
