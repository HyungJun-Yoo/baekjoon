const filePath =
    process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/example.txt`;

let fs = require('fs');
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);

let hints = [];
for (let i = 1; i <= n; i++) {
    hints.push(input[i].split(' ').map(Number));
}

// [ [ 123, 1, 1 ], [ 356, 1, 0 ], [ 327, 2, 0 ], [ 489, 0, 1 ] ]

let answer = 0;
// 1에서 9까지의 서로 다른 숫자 세 개로 구성된 세 자리 수
for (let a = 1; a < 10; a++) {
    // 100의 자리수
    for (let b = 1; b < 10; b++) {
        // 10의 자리수
        for (let c = 1; c < 10; c++) {
            // 1의 자리수

            // 중복되는 숫자가 있는 경우 건너뜀
            if (a === b || b === c || a === c) continue;

            // 숫자가 정해졌다면

            let cnt = 0;
            for (const hint of hints) {
                number = hint[0];
                strike = hint[1];
                ball = hint[2];

                let strike_count = 0;
                let ball_count = 0;

                // a, b, c 라는 숫자를 number하고 비교
                // 자리수를 나눠서, strike와 ball을 측정

                // number를 각 자리수로 분리
                let n1 = Math.floor(number / 100);
                let n2 = Math.floor((number % 100) / 10);
                let n3 = number % 10;

                // 스트라이크 계산
                if (a === n1) strike_count++;
                if (b === n2) strike_count++;
                if (c === n3) strike_count++;

                // 볼 계산
                if (a === n2 || a === n3) ball_count++;
                if (b === n1 || b === n3) ball_count++;
                if (c === n1 || c === n2) ball_count++;

                if (strike === strike_count && ball === ball_count) {
                    cnt += 1;
                }
            }

            if (cnt === n) {
                answer += 1;
            }
        }
    }
}

console.log(answer);