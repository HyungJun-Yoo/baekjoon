const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let expression = input[0].split('-')

let result = 0
for (let i = 0; i < expression.length; i++) {
  let plus = expression[i].split('+')

  let sum = 0
  if (plus.length > 0) {
    for (let j = 0; j < plus.length; j++) {
      sum += Number(plus[j])
    }

    if (i !== 0) sum *= -1
  }

  result += sum
}

console.log(result)