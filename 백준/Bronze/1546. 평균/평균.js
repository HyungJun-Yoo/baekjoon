const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const testCase = Number(input[0])
const array = input[1].split(' ').map(Number)

const maxScore = Math.max(...array)
let sum = 0

for (let i = 0; i < array.length; i++) {
  const newValue = array[i] / maxScore * 100
  sum += newValue
}

console.log(sum / array.length)