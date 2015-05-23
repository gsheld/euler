/* 10001st prime */

(function () {
    'use strict';

    var nthPrime = process.argv[2];

    function isPrime(x) {
        var i;
    
        if (isNaN(x) || !isFinite(x) || x < 2) {
            return false;
        }

        if (x % 2 === 0) {
            return x === 2;
        }

        if (x % 3 === 0) {
            return x === 3;
        }

        for (i = 5; i <= Math.sqrt(x); i += 4) {
            if (x % i === 0) {
                return false;
            }

            if (x % (i + 2) === 0) {
                return false;
            }
        }

        return true;
    }
    
    function nextPrime(n, offset) {
        var i,
            count = 0;

        offset = offset || 1;

        if (isNaN(n) || !isFinite(n)) {
            return NaN;
        }

        n = Math.floor(n);

        for (i = n + (n % 2) + 1; i < Number.MAX_VALUE; i += 2) {
            if (isPrime(i) && ++count >= offset) {
                return i;
            }
        }

        return NaN;
    }

    console.log(nextPrime(2, nthPrime - 1));
}());
