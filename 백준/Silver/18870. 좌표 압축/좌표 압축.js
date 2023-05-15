const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let arr = input[1].split(' ').map(Number)

let compareArr = [...new Set(arr)]
compareArr.sort((a, b) => a - b)

let myMap = {}
for (let i = 0; i < compareArr.length; i++) {
  myMap[compareArr[i]] = i
}

let result = ''
for (let i = 0; i < arr.length; i++) {
  result += `${myMap[arr[i]]} `
}

console.log(result)