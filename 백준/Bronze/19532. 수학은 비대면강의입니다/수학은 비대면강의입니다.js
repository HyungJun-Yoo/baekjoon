const filePath =
    process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/example.txt`;

let fs = require('fs');
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let [A, B, C, D, E, F] = input;

for (let x = -999; x < 1000; x++) {
    for (let y = -999; y < 1000; y++) {
        if (A * x + B * y === C) {
            if (D * x + E * y === F) {
                console.log(x, y);
            }
        }
    }
}