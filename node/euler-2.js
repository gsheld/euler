/* Even Fibonacci numbers */

(function () {
    'use strict';

    var previous, current, temp,
        sum = 0,
        total = 2,
        n = process.argv[2];

    previous = 1;
    current = 2;

    while (current < n) {
        sum = previous + current;
        total += (sum % 2 === 0) ? sum : 0;
        temp = current;
        current += previous;
        previous = temp;
    }

    console.log(total);
}());
