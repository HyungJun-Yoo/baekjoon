const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let nKg = Number(input[0])
let bag = [3, 5]
let result = 0

while (nKg >= bag[1]) {
  if (nKg < 15 && nKg % bag[0] === 0 && nKg % bag[1] !== 0) break  
  
  nKg -= bag[1]
  result++
}

while (nKg >= bag[0]) {
  nKg -= bag[0]
  result++
}

if (nKg > 0) console.log(-1)
else console.log(result)