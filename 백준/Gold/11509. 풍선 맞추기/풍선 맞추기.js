const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let arr = input[1].split(' ').map(Number)

let result = 1
let h = Array(n).fill(0);

h[arr[0] - 1] = 1
for (let i = 1; i < n; i++) {
  if (h[arr[i]] > 0) {
    h[arr[i]]--
    h[arr[i] - 1]++
  } else {
    h[arr[i] - 1]++
    result++
  }
}

console.log(result)