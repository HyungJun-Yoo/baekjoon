let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [a, b, c] = input[0].split(' ').map(Number)
let result = null

if (a === b && a === c) {
  result = 10000 + a * 1000
} else if (a === b) {
  result = 1000 + a * 100
} else if (a === c) {
  result = 1000 + a * 100
} else if (b === c) {
  result = 1000 + b * 100
} else {
  result = Math.max(a, b, c) * 100
}

console.log(result)