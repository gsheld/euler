/* Largest palindrome product */

(function () {
    'use strict';

    var i, j, product,
        colors = require('colors'),
        digits = process.argv[2],
        maxPalindrome = -1,
        largestNum = Math.pow(10, digits) - 1,
        smallestNum = Math.pow(10, digits - 1);

    function isPalindrome(n) {
        var str = n.toString(),
            startPtr = 0,
            endPtr = str.length - 1;

        while (startPtr <= endPtr) {
            if (str.charAt(startPtr++) !== str.charAt(endPtr--)) {
                return false;
            }
        }

        return true;
    }

    for (i = largestNum; i >= smallestNum; i--) {
        for (j = largestNum; j >= smallestNum; j--) {
            product = i * j;
            if (isPalindrome(product) && product > maxPalindrome) {
                maxPalindrome = product;
            }
        }
    }

    if (maxPalindrome > 0) {
        console.log(maxPalindrome.toString().green);
    } else {
        console.log('No palidromes found'.red);
    }
}());
