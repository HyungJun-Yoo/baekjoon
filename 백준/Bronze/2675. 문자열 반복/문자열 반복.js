const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let testCase = Number(input[0])

for (let i = 1; i <= testCase; i++) {
  const [count, str] = input[i].split(' ')  
  let result = ''

  for (let j = 0; j <= str.length; j++) {
    result += str.charAt(j).repeat(count)
  }

  console.log(result)
}