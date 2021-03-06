// ./lib/tests/forEach.test.js
const assert = require('assert');
const expect = require('expect');
const { forEach } = require('../forEach');

const testArray = [1, 2, 3, 4];

describe('forEach', () => {

  it('should be a function', () => {
    expect(typeof forEach).toBe('function');
  });

  it('should return undefined', () => {
    const results = forEach(testArray, (item) => { return; });
    expect(results).toBe(undefined);
  });

  it('should not modify original array', () => {
    const originalArray = [...testArray];
    forEach(testArray, (item) => { return; });
    expect(testArray).toEqual(originalArray);
  });

  it('should loop over every index in the array', () => {
    forEach(testArray, (value, index, original) => {
      expect(value).toEqual(original[index]);
    });
  });

  it('should throw error when first argument is not an array', () => {
    expect(() => forEach()).toThrow(/is not an array/);
    expect(() => forEach('test', (value) => { return;})).toThrow(/is not an array/);
    expect(() => forEach({ name: 'test'}, (value) => { return;})).toThrow(/is not an array/);
  });

  it('should throw error when second argument is not a function', () => {
    expect(() => forEach(testArray, 'test')).toThrow(/is not a function/);
    expect(() => forEach(testArray, { name: 'test'})).toThrow(/is not a function/);
    expect(() => forEach(testArray)).toThrow(/is not a function/);
  });

  it('should bind |this| correctly', () => {
    const obj = { count: 0 };
    forEach(
      testArray,
      function (item) {
        this.count += item;
      },
      obj
    );
    expect(obj.count).toEqual(10);
  });

});

