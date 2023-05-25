let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let testCase = Number(input[0])
let line = 1
while (testCase--) {
  // 가로 길이(m), 세로 길이(n), 배추 위치의 개수(k)
  let [m, n, k] = input[line].split(' ').map(Number)
  let graph = []
  for (let i = 0; i < n; i++) {
    graph[i] = new Array(m)
  }
  for (let i = 1; i <= k; i++) {
    let [y, x] = input[line + i].split(' ').map(Number)
    graph[x][y] = 1
  }

  let answer = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) answer++
    }
  }
  
  line += k + 1
  console.log(answer)
}

function dfs(graph, n, m, x, y) {
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false

  // 현재 노드를 아직 처리하지 않았다면
  if (graph[x][y] == 1) {
    // 해당 노드 방문 처리
    graph[x][y] = -1
    // 상, 하, 좌, 우의 위치들도 모두 재귀적으로 호출
    dfs(graph, n, m, x - 1, y)
    dfs(graph, n, m, x, y - 1)
    dfs(graph, n, m, x + 1, y)
    dfs(graph, n, m, x, y + 1)
    return true
  }

  return false
}
