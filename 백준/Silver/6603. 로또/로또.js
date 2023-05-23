let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let length = input.length - 1
let result = [] 
let answer = ''

for (let i = 0; i < length; i++) {
  let line = input[i].split(' ').map(Number)

  let arr = []
  for (let j = 1; j <= line[0]; j++) {
    arr.push(line[j])
  }
  let visited = new Array(line[0]).fill(false)

  dfs(0, line[0], arr, visited)
  console.log(answer)
  answer = ''
}

function dfs(start, n, arr, visited) {
  if (result.length === 6 && start <= n) {
    for (let i of result) {
      answer += `${arr[i]} `
    }
    answer += '\n'
    return
  }

  for (let i = start; i < n; i++) {
    if (visited[i]) continue

    result.push(i)
    visited[i] = true
    dfs(i + 1, n, arr, visited)
    result.pop()
    visited[i] = false
  }
}