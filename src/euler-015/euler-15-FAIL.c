/* Lattice paths */

#include <stdlib.h>
#include <stdio.h>

typedef struct TwoDArrayPoint {
    int row;
    int col;
} TwoDArrayPoint;

typedef struct TwoDArraySize {
    int rows;
    int cols;
} TwoDArraySize;

TwoDArraySize latticeSizeFromGridSize(TwoDArraySize gridSize) {
    // horizontal lines
    int hLines = (gridSize.rows + 1);

    // vertical lines
    int vLines = (gridSize.cols + 1);

    TwoDArraySize size = { hLines, vLines };
    return size;
}

// FAIL: execution time takes too long. There is a better way. -- Grant, 8/15/2015
long recursiveNumLatticePaths(int rows, int cols, TwoDArrayPoint currPoint) {
    // Base case: check if we have reached bottom-right corner.
    if (currPoint.row == (rows - 1) && currPoint.col == (cols - 1)) {
        return 1;
    }

    long count = 0; // initialize count

    // Attempt to go right
    if (currPoint.col < (cols - 1)) {
        TwoDArrayPoint newPoint = { currPoint.row, currPoint.col + 1 };
        count += recursiveNumLatticePaths(rows, cols, newPoint);
    }

    // Attempt to go down
    if (currPoint.row < (rows - 1)) {
        TwoDArrayPoint newPoint = { currPoint.row + 1, currPoint.col };
        count += recursiveNumLatticePaths(rows, cols, newPoint);
    }

    return count;
}

long numLatticePaths(int rows, int cols) {
    TwoDArrayPoint startPoint = { 0, 0 };
    return recursiveNumLatticePaths(rows, cols, startPoint);
}

int main(int argc, char * argv[]) {
    int rowSize = atoi(argv[1]);
    int colSize = atoi(argv[2]);

    if (rowSize < 1 || colSize < 1) {
        puts("** Sorry, grid dimensions must be valid.");
        exit(1);
    }

    TwoDArraySize gridSize = { rowSize, colSize };
    TwoDArraySize latticeSize = latticeSizeFromGridSize(gridSize);

    printf("%ld\n", numLatticePaths(latticeSize.rows, latticeSize.cols));
}
