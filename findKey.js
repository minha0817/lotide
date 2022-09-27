const findKey = function (keys, callback) {
  for (let key in keys) {
    if (callback(keys[key])) {
      return key;
    }
  }
};

module.exports = findKey;
