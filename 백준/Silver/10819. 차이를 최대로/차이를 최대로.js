let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let arr = input[1].split(' ').map(Number)

let selected = []
let visited = new Array(n + 1).fill(false)
let result = 0
dfs(0, arr)
console.log(result)

function dfs(depth, arr) {
  if (selected.length == n) {
    let total = 0
    for (let i = 0; i < selected.length - 1; i++) {
      total += Math.abs(selected[i] - selected[i + 1])
    }

    result = Math.max(result, total)
    return
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue
    selected.push(arr[i])
    visited[i] = true
    dfs(i + 1, arr)
    selected.pop()
    visited[i] = false
  }
}