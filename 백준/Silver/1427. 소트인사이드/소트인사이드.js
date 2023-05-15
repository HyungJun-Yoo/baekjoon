const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let arr = input[0].split('').map(Number)
arr.sort((a, b) => b - a)
console.log(arr.join(''))