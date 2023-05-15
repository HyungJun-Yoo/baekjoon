const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let coordinate = []

for (let i = 1; i <= n; i++) {
  coordinate.push(input[i])
}

coordinate.sort((a, b) => {
  let x_a = Number(a.split(' ')[0])
  let y_a = Number(a.split(' ')[1])
  let x_b = Number(b.split(' ')[0])
  let y_b = Number(b.split(' ')[1])

  if (x_a === x_b) {
    return y_a - y_b
  }

  return x_a - x_b
})

let result = ''
for (let i = 0; i < n; i++) {
  result += coordinate[i] + '\n'
}

console.log(result)