let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let graph = []
for (let i = 1; i <= n; i++) {  
  graph.push(input[i].split(''))
}

// 상, 하, 좌, 우
let dx = [-1, 1, 0, 0]
let dy = [0, 0, -1, 1]

function dfs(x, y) {
  if (!visited[x][y]) {
    visited[x][y] = true
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i]
      let ny = y + dy[i]
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue
      if (graph[x][y] == graph[nx][ny]) dfs(nx, ny)
    }
    
    return true
  }
  
  return false
}

let result1 = 0
let visited = []
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false))
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j, 0)) result1++
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++)
    if(graph[i][j] == 'R') graph[i][j] = 'G'
}

let result2 = 0
visited = []
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false))
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j, 0)) result2++
  }
}

console.log(`${result1} ${result2}`)