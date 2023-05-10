const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const length = Number(input[0])
const array = input[1].split(' ').map(Number)

console.log(`${Math.min(...array)} ${Math.max(...array)}`)