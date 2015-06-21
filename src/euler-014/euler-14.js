/* Longest Collatz sequence */

(function () {
    'use strict';

    var n,
        colors = require('colors'),
        args = process.argv.slice(2),
        debugIndex = args.indexOf('-d'),
        debug = debugIndex > -1;

    if (debug) {
        args.splice(debugIndex, 1);
    }

    n = args[0];
    console.log(longestCoalltzChain(n, debug).toString().green);

    function longestCoalltzChain(n, debug) {
        var currCount,
            maxCount = 0,
            maxNum = 0;

        while (n > 1) {
            currCount = coalltzChainCount(--n, debug);
            
            if (currCount > maxCount) {
                maxCount = currCount;
                maxNum = n;
            }
        }

        return maxNum;
    }

    function coalltzChainCount(start, debug) {
        var currNum = start,
            count = 0,
            chain = [];

        while (true) {
            count++;

            if (debug) {
                chain.push(currNum.toString());
            }

            // Ending condition
            if (currNum <= 1) {
                break;
            }

            // Generating Coalltz chain
            if (currNum % 2 === 0) {
                currNum /= 2;
            } else {
                currNum = (currNum * 3) + 1;
            }

        }

        if (debug) {
            console.log(start.toString() + ': ' + chain.join('->') + ' (' + count + ')');
        }

        return count;
    }
}());
