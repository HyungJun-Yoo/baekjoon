let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let arr = []
for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(' ').map(Number)
  arr.push([x, y])
}
let visited = new Array(n).fill(false)
let result = []
let answer = 1e9

function dfs(depth, start) {
  if (depth >= 1) {
    let totalS = 1
    let totalB = 0
    for (let i of result) {
      let [s, b] = arr[i]
      totalS *= s
      totalB += b
    }    
    answer = Math.min(answer, Math.abs(totalS - totalB))
  }

  for (let i = start; i < n; i++) {
    if (visited[i]) continue    
    result.push(i)
    visited[i] = true
    dfs(depth + 1, i + 1)
    result.pop()
    visited[i] = false
  }
}

dfs(0, 0)
console.log(answer)