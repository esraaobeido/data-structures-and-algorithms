'use strict';
const binarySearch = require('./BinarySearch');

describe('binarySearch', () => {
  it('should return the index of the search key in the array', () => {
    const arr1 = [2, 4, 6, 8, 10];
    expect(binarySearch(arr1, 6)).toEqual(2);

    const arr2 = [1, 3, 5, 7, 9];
    expect(binarySearch(arr2, 10)).toEqual(-1);

    const arr3 = [10, 20, 30, 40, 50];
    expect(binarySearch(arr3, 30)).toEqual(2);

    const arr4 = [15, 25, 35, 45, 55];
    expect(binarySearch(arr4, 20)).toEqual(-1);
  });

  it('should return -1 for empty array', () => {
    const arr = [];
    expect(binarySearch(arr, 10)).toEqual(-1);
  });

  it('should return -1 if search key is not found in the array', () => {
    const arr = [1, 3, 5, 7, 9];
    expect(binarySearch(arr, 4)).toEqual(-1);
  });
});
