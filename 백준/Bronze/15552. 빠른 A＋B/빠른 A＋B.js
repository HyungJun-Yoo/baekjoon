let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let line = Number(input[0])
let result = ''

for (let i = 1; i <= line; i++) {
  const [a, b] = input[i].split(' ').map(Number)
  result += `${a + b}`

  if (i !== line) result += '\n'
}

console.log(result)