let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let d = new Array(1000001).fill(0)
d[1] = 1
d[2] = 2

let num = Number(input[0])

if (num < 3) {
  console.log(d[num])
  process.exit()
}
for (let i = 3; i <= num; i++) {
  d[i] = (d[i - 2] + d[i - 1]) % 15746
}

console.log(d[num])