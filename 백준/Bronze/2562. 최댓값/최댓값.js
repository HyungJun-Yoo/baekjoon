const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const array = input.map(Number)

let maxValue = 0
let maxIndex = 0

for (let i = 0; i < array.length; i++) {
  if (maxValue < array[i]) {
    maxValue = array[i]
    maxIndex = i + 1
  }
}

console.log(maxValue)
console.log(maxIndex)