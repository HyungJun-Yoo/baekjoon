const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let line = input[1].split(' ').map(Number)
line.sort((a, b) => a - b)

let arr = []
for (let i = 0; i < n; i++) {
  if (arr.length > 0)
    arr.push(line[i] + arr[arr.length - 1])
  else 
    arr.push(line[i])
}

let result = arr.reduce((a, b) => a + b)
console.log(result)