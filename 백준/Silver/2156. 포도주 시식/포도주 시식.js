let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let arr = []
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]))
}

let dp = new Array(n).fill(0)
dp[0] = arr[0]
dp[1] = arr[0] + arr[1]
dp[2] = Math.max(arr[0] + arr[1], arr[0] + arr[2], arr[1] + arr[2])

// 점화식에 따라서 DP 테이블 갱신
for (let i = 3; i < n; i++) {
  dp[i] = dp[i - 1]
  dp[i] = Math.max(dp[i], arr[i] + dp[i - 2])
  dp[i] = Math.max(dp[i], arr[i] + arr[i - 1] + dp[i - 3])
}

console.log(dp[n - 1])