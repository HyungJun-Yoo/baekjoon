let fs = require('fs');
let input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(BigInt);

const TC = Number(input[0]);

for (let i = 1; i <= TC; i++) {
    number = input[i];

    for (let j = 2n; j < 1000001n; j++) {
        if (number % j === 0n) {
            console.log('NO');
            break;
        }

        if (j === 1000000n) {
            console.log('YES');
        }
    }
}