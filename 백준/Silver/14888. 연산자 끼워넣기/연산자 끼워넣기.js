let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let arr = input[1].split(' ').map(Number)
// 덧셈, 뺄셈, 곱셈, 나눗셈의 연산자 개수
let [add, sub, mul, div] = input[2].split(' ').map(Number)

let minValue = 1e9
let maxValue = -1e9

dfs(1, arr[0])

console.log(maxValue)
console.log(minValue)

function dfs(index, value) {
  if (index == n) {
    minValue = Math.min(minValue, value)
    maxValue = Math.max(maxValue, value)
    return
  }

  if (add > 0) {
    add--
    dfs(index + 1, value + arr[index])
    add++
  }
  if (sub > 0) {
    sub--
    dfs(index + 1, value - arr[index])
    sub++
  }
  if (mul > 0) {
    mul--
    dfs(index + 1, value * arr[index])
    mul++
  }
  if (div > 0) {
    div--
    dfs(index + 1, ~~(value / arr[index]))
    div++
  }
}