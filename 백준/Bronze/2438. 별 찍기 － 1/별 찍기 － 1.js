let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])

for (let i = 1; i <= n; i++) {
  let result = ''
  for (let j = 1; j <= i; j++) {
    result += '*'
  }

  console.log(result)
}