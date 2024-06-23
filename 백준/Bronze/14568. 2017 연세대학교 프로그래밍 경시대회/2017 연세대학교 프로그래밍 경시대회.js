const filePath =
    process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/example.txt`;

let fs = require('fs');
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const CANDY = input[0];
let answer = 0;

for (let A = 0; A < CANDY + 1; A++) {
    for (let B = 0; B < CANDY + 1; B++) {
        for (let C = 0; C < CANDY + 1; C++) {
            if (A + B + C === CANDY) {
                if (A >= B + 2) {
                    if (A != 0 && B != 0 && C != 0) {
                        if (C % 2 === 0) {
                            answer += 1;
                        }
                    }
                }
            }
        }
    }
}

console.log(answer);