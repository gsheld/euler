/* Summation of primes */

/**
 * Note 5/25/15: Although logically correct, this script takes ~10 minutes to execute
 * for N = 2000000.
 *
 * real 9m59.229s
 * user 9m9.096s
 * sys  0m11.122s
 */

(function () {
    'use strict';

    function NumNode(val, visited) {
        this.val = val;
        this.visited = visited;
    }

    function getNextPrimeIndex(numNodes, currPrimeIndex) {
        var i;

        for (i = currPrimeIndex + 1; i < numNodes.length; i++) {
            if (!numNodes[i].visited) {
                return i;
            }
        }

        return -1;
    }

    // Variation of Seive of Eratosthenes.
    function primesBelowN(n) {
        var i, numNodes, currPrimeNode,
            utility = require('lodash/utility'),
            array = require('lodash/array'),
            currPrimeIndex = -1,
            primes = [2],
            natNums = utility.range(3, n, 2);

        numNodes = natNums.map(function (currVal) {
            return new NumNode(currVal, false);
        });

        while (true) {
            currPrimeIndex = getNextPrimeIndex(numNodes, currPrimeIndex);

            if (currPrimeIndex < 0) {
                break;
            }

            currPrimeNode = numNodes[currPrimeIndex];
            currPrimeNode.visited = true;
            primes.push(currPrimeNode.val);

            for (i = currPrimeNode.val; i < numNodes.length; i++) {
                if (numNodes[i].val % currPrimeNode.val === 0) {
                    numNodes[i].visited = true;
                }
            }
        }

        return primes;
    }

    var sum,
        n = process.argv[2],
        primes = primesBelowN(n);

    sum = primes.reduce(function (accumulator, currVal) {
        return accumulator + currVal;
    });

    console.log(sum);
    process.exit(0);
}());
