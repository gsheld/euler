/* Highly divisible triangular number */

(function () {
    'use strict';

    var numDivisors = process.argv[2],
        colors = require('colors'),
        tNum = getTriangleNumWithOverXDivisors(numDivisors, 1, 1);

    console.log(tNum.toString().green);

    // Recursively searchs for the triangle number that has greater than x divisors.
    function getTriangleNumWithOverXDivisors(x, currTNum, natNum) {
        var factors = getFactors(currTNum);

        if (factors.length > x) {
            return currTNum;
        }

        return getTriangleNumWithOverXDivisors(x, currTNum + natNum + 1, natNum + 1);
    }

    // Runs in O(sqrt(n)) time complexity.
    function getFactors(n) {
        var i,
            _ = require('lodash'),
            factors = [];

        for (i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                factors.push(i);
                factors.push(n / i);
            }
        }

        return _.uniq(factors); // Ensures a unique set of factors is returned.
    }
}());
