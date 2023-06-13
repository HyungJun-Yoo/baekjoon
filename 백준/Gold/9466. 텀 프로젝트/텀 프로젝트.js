let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let testCase = Number(input[0])
let line = 1

while (testCase--) {
  let n = Number(input[line])
  let graph = [0, ...input[line + 1].split(' ').map(Number)]
  let visited = new Array(n + 1).fill(false)
  let finished = new Array(n + 1).fill(false)
  let result = []

  for (let x = 1; x <= n; x++) {
    if (!visited[x]) {
      dfs(x, graph, visited, finished, result)
    }
  }

  line += 2
  console.log(n - result.length)
}

function dfs(x, graph, visited, finished, result) {
  // 현재 노드 방문 처리
  visited[x] = true
  // 다음 노드
  let y = graph[x]
  // 다음 노드를 아직 방문하지 않았다면
  if (!visited[y]) {
    dfs(y, graph, visited, finished, result)
  }
  // 다음 노드를 방문한 적 있고, 완료되지 않았다면
  else if (!finished[y]) {
    // 사이클이 발생한 것이므로 사이클에 포함된 노드 저장
    while (y != x) {
      result.push(y)
      y = graph[y]
    }
    result.push(x)
  }

  // 현재 노드의 처리가 완료됨
  finished[x] = true 
}