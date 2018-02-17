// ./lib/forEach.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

function forEach(array, callback, thisArg) {

  if (!Array.isArray(array)) {
    throw new TypeError(`${array} is not an array`);
  }

  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`);
  }

  for (let i = 0; i < array.length; i++) {
    callback.call(thisArg, array[i], i, array);
  }
}
module.exports = {
  forEach
};
