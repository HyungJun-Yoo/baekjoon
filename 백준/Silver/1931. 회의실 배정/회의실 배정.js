const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let arr = []
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(' ').map(Number))
}

// 회의실 시작순서로 정렬
arr.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1]
  return a[0] - b[0]
})

let result = 1
let cur = 0
// 회의실 배정 시작

for (let i = 1; i < n; i++) {
  if (arr[cur][1] <= arr[i][0]) {
    cur = i
    result += 1
  }
}

console.log(result)