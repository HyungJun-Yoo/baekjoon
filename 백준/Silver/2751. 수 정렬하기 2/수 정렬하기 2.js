const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let array = []
for (let i = 1; i <= n; i++) {
  array.push(Number(input[i]))  
}

array.sort((a, b) => a - b)

let result = ''
for (let i = 0; i < array.length; i++) {
  result += array[i] + '\n'
}

console.log(result)