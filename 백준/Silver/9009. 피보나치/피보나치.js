const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// 피보나치
let pibo = []
pibo.push(0)
pibo.push(1)
while (pibo[pibo.length - 1] < 1e9) pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1])
pibo.sort((a, b) => b - a)

let n = Number(input[0])

for (let i = 1; i <= n; i++) {
  let testCase = Number(input[i])
  let result = []
  let sum = 0
  
  for (let i = 0; i < pibo.length - 1; i++) {
    if (sum + pibo[i] <= testCase) {
      sum += pibo[i]
      result.push(pibo[i])
    }
  }

  result.sort((a, b) => a - b)
  console.log(...result)
}