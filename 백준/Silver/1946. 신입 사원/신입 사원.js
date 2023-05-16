const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let answer = []
for (let i = 1; i < input.length; i++) {
  if (input[i].split(' ').length !== 1) continue
  let testCase = Number(input[i])
  let arr = input.slice(i + 1, testCase + i + 1).map((item) => item.split(' ').map(Number))
  answer.push(Condition(arr))
}

let str = ''
answer.forEach((item) => str += `${item}\n`)
console.log(str)

function Condition(arr) {  
  let result = arr.length
  arr.sort((a, b) => a[0] - b[0])

  let y = arr[0][1]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][1] > y) {
      result--
    } else {
      y = arr[i][1]
    }
  }

  return result
}