/* Multiples of 3 and 5 */

(function () {
    'use strict';

    var i, condition,
        n = parseInt(process.argv[2], 10),
        total = 0;

    for (i = 1; i < n; i++) {
        condition = ((i % 3) === 0 || (i % 5) === 0);
        total += condition ? i : 0;
    }

    console.log(total);
}());
