// ./lib/tests/map.test.js
const assert = require('assert');
const expect = require('expect');
const { map } = require('../map');

let testArray;

describe('map', () => {

  beforeEach(() => {
    testArray = [1, 2, 3, 4];
  });

  it('should be a function', () => {
    expect(typeof map).toBe('function');
  });

  it('should return an array', () => {
    const results = map(testArray, item => item * 2);
    expect(Array.isArray(results)).toBe(true);
  });

  it('should not mutate original array', () => {
    const original = [...testArray];
    map(testArray, x => x * 2);
    expect(testArray).toEqual(original);
  });

  it('should invoke callback exactly as many times as length of array', () => {
    let cbCount = 0;
    map(testArray, (item) => {
      cbCount += 1;
      return item;
    });
    expect(cbCount).toEqual(testArray.length);
  });

  it('should return a new array where callback changes are reflected', () => {
    const results = map(testArray, x => x * 2);
    expect(results).toEqual([2, 4, 6, 8]);
  });

  it('should throw error when first argument is not an array', () => {
    expect(() => map()).toThrow(/is not an array/);
    expect(() => map('test', (value) => { return;})).toThrow(/is not an array/);
    expect(() => map({ name: 'test'}, (value) => { return;})).toThrow(/is not an array/);
  });

  it('should throw error when second argument is not a function', () => {
    expect(() => map(testArray, 'test')).toThrow(/is not a function/);
    expect(() => map(testArray, { name: 'test'})).toThrow(/is not a function/);
    expect(() => map(testArray)).toThrow(/is not a function/);
  });

  it('should bind |this| correctly', () => {
    const obj = { count: 0 };
    map(
      testArray,
      function (item) {
        this.count += item;
      },
      obj
    );
    expect(obj.count).toEqual(10);
  });

});
