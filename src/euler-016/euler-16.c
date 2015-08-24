/* Power digit sum */

#include <stdlib.h>
#include <stdio.h>

typedef struct SumCarry {
    unsigned short sum;
    unsigned short carry;
} SumCarry;

SumCarry multiply_digit(int digit, int multiplier) {
    int sum = digit * multiplier % 10;
    int carry = digit * multiplier / 10;

    SumCarry sumCarry = { (unsigned short)sum, (unsigned short)carry };
    return sumCarry;
}

long sum_digits(int base, int exponent) {
    int count = 0;
}

int main(int argc, char * argv[]) {

}
