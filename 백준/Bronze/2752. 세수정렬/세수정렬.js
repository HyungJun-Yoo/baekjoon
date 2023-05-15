const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const result = input[0].split(' ').map(Number)

result.sort((a, b) => a - b)

console.log(result.join(' '))