/* Multiples of 3 and 5 */

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char * argv[]) {
    int n = atoi(argv[1]);
    int total = 0;

    for (int i = 0; i < n; i++) {
        int condition = ((i % 3) == 0 || (i % 5) == 0);
        total += (condition ? i : 0);
    }

    printf("%d\n", total);
    return 0;
}
