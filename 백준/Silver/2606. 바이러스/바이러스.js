let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0]) // 정점의 개수(N)
let m = Number(input[1]) // 간선의 개수(M)
let graph = [] // 그래프 정보
for (let i = 1; i <= n; i++) graph[i] = []
for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(' ').map(Number)
  graph[x].push(y)
  graph[y].push(x)
}
let cnt = 0
let visited = new Array(n + 1).fill(false)

dfs(1)
console.log(cnt - 1)

function dfs(x) {
  visited[x] = true
  cnt++

  for (y of graph[x]) {
    if (!visited[y]) {
      dfs(y)      
    }
  }
}