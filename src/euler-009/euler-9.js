/* Special Pythagorean triplet */

(function () {
    'use strict';

    var a, b, c,
        colors = require('colors');

    function condition1(a, b, c) {
        return a < b && b < c;
    }

    function condition2(a, b, c) {
        return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
    }

    function condition3(a, b, c) {
        return a + b + c === 1000;
    }

    for (a = 0; a <= 1000; a++) {
        for (b = 0; b <= 1000; b++) {
            c = 1000 - a - b;

            if (condition1(a, b, c) && condition2(a, b, c) && condition3(a, b, c)) {
                console.log('a = ' + a + '; b = ' + b + '; c = ' + c);
                console.log((a * b * c).toString().green);
                process.exit(0);
            }
        }
    }

    console.log('There was a problem. No answer found.'.red);
    process.exit(1);
}());
