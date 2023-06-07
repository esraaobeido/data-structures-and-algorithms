'use strict';

    const insertShiftArray = require('./insertShiftArray');

    describe('Testing insertShiftArray function', () => {
      test('It should return a new array with the value inserted at the middle index', () => {
        expect(insertShiftArray([1, 2, 3, 4, 5, 6], 100)).toStrictEqual([1, 2, 3, 100, 4, 5, 6]);
        expect(insertShiftArray([2, 3, 5, 7, 8], 100)).toStrictEqual([2, 3, 5, 100, 7, 8]);
      });
    });