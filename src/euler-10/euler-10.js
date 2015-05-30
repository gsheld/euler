/* Summation of primes */

(function () {
    'use strict';

    var limit = process.argv[2];
    console.log(sumOfPrimes(limit));

    function sumOfPrimes(limit) {
        var n, p, currPrime,
            primes = [2];

        for (n = 3; n < limit; n++) {
            for (p = 0; p < primes.length; p++) {
                currPrime = primes[p];

                if (n % currPrime === 0) {
                    break;
                }

                // Every composite number n must be divisible by a prime p less
                // than or equal to its square root.
                if (currPrime > Math.sqrt(n)) {
                    primes.push(n);
                    break;
                }
            }
        }

        return primes.reduce(function (accumulator, currVal) {
            return accumulator += currVal;
        });
    }
}());
