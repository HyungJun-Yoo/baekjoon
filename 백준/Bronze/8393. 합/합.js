let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let quest = Number(input[0])
let sum = 0

for (let i = 1; i <= quest; i++) {
  sum += i  
}

console.log(sum)