/* Largest prime factor */

(function () {
    'use strict';

    var p = 2,
        factors = [],
        n = process.argv[2],
        colors = require('colors');

    while (n > 1) {
        while (n % p === 0) {
            factors.push(p);
            n /= p; // Divide target by current prime
        }

        p++; // Increment current prime by one.

        // Only need to check up until sqrt(n) -- if nothing divides it by this
        // point, n must be prime. Because of this check, this algorithm runs
        // in O(sqrt(n)) as opposed to O(n).
        if (p * p > n && n > 1) {
            console.log(p + ' * ' + p + ' is >' + n + '. It\'s a factor.');
            factors.push(n);
            break;
        }
    }

    console.log(String(Math.max.apply(null, factors)).bold.green);
}());
