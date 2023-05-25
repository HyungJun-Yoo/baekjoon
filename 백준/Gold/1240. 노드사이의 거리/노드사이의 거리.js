let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// 노드의 개수, 쿼리의 개수
let [n, m] = input[0].split(' ').map(Number)
let graph = []
for (let i = 0; i <= n; i++) graph[i] = []

for (let i = 1; i < n; i++) {
  let [x, y, cost] = input[i].split(' ').map(Number)  
  graph[y].push([x, cost])
  graph[x].push([y, cost])
}

for (let i = 0; i < m; i++) {
  visited = new Array(n + i).fill(false)
  distance = new Array(n + i).fill(-1)
  let [x, y] = input[n + i].split(' ').map(Number)
  dfs(x, 0)
  console.log(distance[y])
}

function dfs(x, dist) {
  if (visited[x]) return
  visited[x] = true
  distance[x] = dist
  
  for (let [y, cost] of graph[x]) {    
    dfs(y, dist + cost)
  }
}