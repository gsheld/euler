/* Sum square difference */

(function () {
    'use strict';

    var sumOfSquares, squareOfSum,
        numbers = parseInt(process.argv[2], 10);

    function sumOfSquaresFunc(n) {
        var i,
            sum = 0;

        for (i = n; i > 0; i--) {
            sum += Math.pow(i, 2);
        }

        return sum;
    }

    function squareOfSumFunc(n) {
        var i,
            sum = 0;

        for (i = n; i > 0; i--) {
            sum += i;
        }

        return Math.pow(sum, 2);
    }

    sumOfSquares = sumOfSquaresFunc(numbers);
    squareOfSum = squareOfSumFunc(numbers);

    // O(2n) -> O(n) time complexity.
    console.log(Math.abs(sumOfSquares - squareOfSum));
}());
