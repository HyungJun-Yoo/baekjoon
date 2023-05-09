let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const a = Number(input[0])
const b = input[1]

console.log(a * Number(b[2]))
console.log(a * Number(b[1]))
console.log(a * Number(b[0]))
console.log(a * Number(b))