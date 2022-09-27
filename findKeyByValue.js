const findKeyByValue = function (obj, value) {
  //how to go through obj
  for (let genre in obj) {
    if (obj[genre] === value) {
      return genre;
    }
  }
};

module.exports = findKeyByValue;
