let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let line = input[0].split(' ')

let H = Number(line[0])
let M = Number(line[1])

if (M < 45) {
  M += (60 - 45)

  if (H === 0) H = 24
  H -= 1
} else {
  M -= 45
}

console.log(`${H} ${M}`)