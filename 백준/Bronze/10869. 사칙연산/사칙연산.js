let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let line = input[0].split(' ')

const a = Number(line[0])
const b = Number(line[1])

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(parseInt(a / b))
console.log(a % b)