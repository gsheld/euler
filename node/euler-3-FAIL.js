/* Largest prime factor */

/* Note 5/17/15: This script fails due to inherent inefficiencies. Although
 * capable of producing the correct answer, the runtime becomes prohibitively
 * long for large numbers (such as that given in the problem statement).
 */

(function () {
    'use strict';

    var j,
        lPrime = false,
        n = process.argv[2];

    function isPrime(x) {
        var i;
    
        console.log('Checking base');
        if (isNaN(x) || !isFinite(x) || x < 2) {
            return false;
        }

        console.log('Checking x % 2 ');
        if (x % 2 === 0) {
            return x === 2;
        }

        console.log('Checking x % 3');
        if (x % 3 === 0) {
            return x === 3;
        }

        console.log('Checking x % 5');
        if (x % 5 === 0) {
            return x === 5;

        }

        for (i = 7; i <= Math.sqrt(x); i += 30) {
            console.log('Checking x % ' + i);
            if (x % i === 0) {
                return false;
            }

            console.log('Checking x % ' + (i + 4));
            if (x % (i + 4) === 0) {
                return false;
            }

            console.log('Checking x % ' + (i + 6));
            if (x % (i + 6) === 0) {
                return false;
            }

            console.log('Checking x % ' + (i + 10));
            if (n % (i + 10) === 0) {
                return i + 10;
            }

            console.log('Checking x % ' + (i + 12));
            if (n % (i + 12) === 0) {
                return i + 12;
            }

            console.log('Checking x % ' + (i + 16));
            if (n % (i + 16) === 0) {
                return i + 16;
            }

            console.log('Checking x % ' + (i + 22));
            if (n % (i + 22) === 0) {
                return i + 22;
            }

            console.log('Checking x % ' + (i + 24));
            if (n % (i + 24) === 0) {
                return i + 24;
            }
        }

        return true;
    }
    
    for (j = n - 1; j > 1; j--) {
        if (n % j === 0 && isPrime(j)) {
            lPrime = j;
            break;
        }
    }

    console.log(lPrime || 'No primes');
}());
