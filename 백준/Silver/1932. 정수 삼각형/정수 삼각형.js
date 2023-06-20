let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let dp = []

for (let i = 1; i <= n; i++) {
  let data = input[i].split(' ').map(Number)
  dp.push(data)
}

// 다이나믹 프로그래밍으로 2번째 줄부터 내려가면서 확인
for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    // 왼쪽 위에서 내려오는 경우
    let upLeft = 0
    if (j != 0) upLeft = dp[i - 1][j - 1]
    // 바로 위에서 내려오는 경우
    let up = 0
    if (j != i) up = dp[i - 1][j]
    // 최대 합을 저장
    dp[i][j] = dp[i][j] + Math.max(upLeft, up)
  }
}

console.log(Math.max(...dp[n - 1]))