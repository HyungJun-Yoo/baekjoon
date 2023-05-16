const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let citys = input[1].split(' ').map(BigInt)
let liters = input[2].split(' ').map(BigInt)

let result = 0n
let minCost = BigInt(liters[0])
for (let i = 0; i < n - 1; i++) {
  if (minCost > liters[i]) minCost = BigInt(liters[i])

  result += citys[i] * minCost
}

console.log(result.toString())
