/* Smallest multiple */

(function () {
    'use strict';

    var i,
        maxDivisor = parseInt(process.argv[2], 10),
        math = require('mathjs'),
        colors = require('colors'),
        factorial = math.factorial(maxDivisor);

    function isValidProduct(n) {
        var i;

        for (i = maxDivisor; i > 0; i--) {
            if (n % i !== 0) {
                return false;
            }
        }

        return true;
    }

    for (i = 0; i < factorial; i++) {
        // Optimization: check if i is a divisor of factorial
        // before calling isValidProduct().
        if (factorial % i === 0 && isValidProduct(i)) {
            console.log(i.toString().green);
            break;
        }
    }
}());
