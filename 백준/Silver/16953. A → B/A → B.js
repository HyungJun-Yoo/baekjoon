const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [a, b] = input[0].split(' ').map(Number)

let result = 1
while(b > a) {
  let strB = String(b)  
  if (strB[strB.length - 1] === '1') {
    let temp = strB.slice(0, strB.length - 1)
    b = Number(temp)    
  } else {
    b /= 2
  }  

  result++
}

if (a === b) console.log(result)
else console.log(-1)