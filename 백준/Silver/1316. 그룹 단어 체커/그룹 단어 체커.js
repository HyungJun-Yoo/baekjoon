const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const testCase = Number(input[0])

let result = 0

for (let i = 1; i <= testCase; i++) {
  const str = input[i]
  const array = []

  for (let j = 0; j < str.length; j++) {    
    if (array.indexOf(str[j]) < 0) {      
      array.push(str[j])    
    } else {
      if (str[j] !== str[j - 1]) break
    }

    if (j === str.length - 1) result++
  }
}

console.log(result)