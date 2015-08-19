/* Lattice paths */

#include <stdlib.h>
#include <stdio.h>

long recursiveNumLatticePaths(int rows, int cols, int currRow, int currCol, long** grid) {
    // Base case 1
    if (currRow == (rows - 1)) {
        return 1;
    }

    // Base case 2
    if (currCol == (cols - 1)) {
        return 1;
    }

    long lower = grid[currRow + 1][currCol];
    long right = grid[currRow][currCol + 1];

    // Get lower box if not previously encountered.
    if (!lower) {
        lower = recursiveNumLatticePaths(rows, cols, currRow + 1, currCol, grid);
        grid[currRow + 1][currCol] = lower;
    }

    // Get right box if not previously encountered.
    if (!right) {
        right = recursiveNumLatticePaths(rows, cols, currRow, currCol + 1, grid);
        grid[currRow][currCol + 1] = right;
    }

    return lower + right;
}

long numLatticePaths(int rows, int cols) {
    long** grid = malloc(sizeof(long*) * rows);

    // Initialize grid of appropriate size
    for (int i = 0; i < rows; i++) {
        grid[i] = malloc(sizeof(long) * cols);

        for (int j = 0; j < cols; j++) {
            grid[i][j] = 0l;
        }
    }

    return recursiveNumLatticePaths(rows, cols, 0, 0, grid);
}

int main(int argc, char * argv[]) {
    int rowSize = atoi(argv[1]) + 1;
    int colSize = atoi(argv[2]) + 1;

    if (rowSize < 2 || colSize < 2) {
        puts("** Sorry, grid dimensions must be valid.");
        exit(1);
    }

    printf("%ld\n", numLatticePaths(rowSize, colSize));
}
