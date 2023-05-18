let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let depth = Number(input[0])
let selected = []
let visited = new Array(depth).fill(false)

let answer = ''
function dfs(dep) {
  if (depth === dep) {    
    let result = []
    for (let i of selected) result.push(i)
    for (let x of result) answer += x + " "
    answer += '\n'
    return
  }

  for (let i = 1; i <= depth; i++) {
    if (visited[i]) continue
    selected.push(i)
    visited[i] = true
    dfs(dep + 1)
    selected.pop()
    visited[i] = false
  }
}

dfs(0)
console.log(answer)