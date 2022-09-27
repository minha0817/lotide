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

module.exports = takeUntil;
