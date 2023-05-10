let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let result = ''

for (let i = 1; i < 10; i++) {
  result += `${n} * ${i} = ${n * i}`

  if (i !== 9) result += '\n'
}

console.log(result)