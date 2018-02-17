// ./lib/forEach.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// array.forEach(...);
// forEach(array, ...);


/**
 * Executes a provided function once for each array element.
 * @param {Array} arr
 * @param {Function} cb
 * @param {Object} thisArg
 */
function forEach(arr, cb, thisArg) {
  const arrClone = [...arr];

  for (let i = 0; i < arrClone.length; i++) {
    cb(arrClone[i], i, arrClone);
  };

}

module.exports = {
  forEach
};
