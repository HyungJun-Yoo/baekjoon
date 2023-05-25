let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let line = 0
let graph = []
let cnt = 0
let testCase = 1
while (line < input.length) {
  // [정점의 개수, 간선의 개수]
  let [n, m] = input[line].split(' ').map(Number)
  if (n == 0 && m == 0) break
  
  visited = new Array(n + 1).fill(false)

  graph = []
  cnt = 0
  for (let i = 1; i <= n; i++) graph[i] = []
  for (let i = 1; i <= m; i++) {
    let [x, y] = input[line + i].split(' ').map(Number)
    graph[x].push(y)
    graph[y].push(x)
  }  

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      if (!isCycle(i, 0)) cnt++
    }
  }

  if (cnt == 0) console.log(`Case ${testCase}: No trees.`)
  else if (cnt == 1) console.log(`Case ${testCase}: There is one tree.`)
  else console.log(`Case ${testCase}: A forest of ${cnt} trees.`)
  
  line += m + 1
  testCase++
}

function isCycle(x, prev) {
  visited[x] = true  
  
  for (let y of graph[x]) {    
    if (!visited[y]) {
      if (isCycle(y, x)) return true
    }    
    else if (y != prev) return true
  }

  return false
}