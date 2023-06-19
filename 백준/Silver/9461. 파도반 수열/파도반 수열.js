let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let testCase = Number(input[0])

let dp = []
dp[0] = 1
dp[1] = 1
dp[2] = 1

for (let i = 3; i <= 100; i++) {
  dp[i] = dp[i - 2] + dp[i - 3]
}

for (let i = 1; i <= testCase; i++) {
  let num = Number(input[i])
  console.log(dp[num - 1])
}