const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let coordinate = []

for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(' ').map(Number)
  coordinate.push([x, y])
}

coordinate.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0]
  else return a[1] - b[1]
})

let result = ''
for (let data of coordinate) {
  result += `${data[0]} ${data[1]} \n`
}

console.log(result)