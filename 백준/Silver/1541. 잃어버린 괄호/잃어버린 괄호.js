const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let groups = input[0].split('-')

let result = 0
for (let i = 0; i < groups.length; i++) {
  let cur = groups[i].split('+').map(Number).reduce((a, b) => a + b)
  if (i !== 0) cur *= -1

  result += cur
}

console.log(result)