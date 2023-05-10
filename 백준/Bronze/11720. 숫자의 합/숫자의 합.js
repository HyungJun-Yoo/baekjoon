const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const array = input[1].split('').map(Number)
let sum = 0

for (let item of array) {
  sum += item
}

console.log(sum)