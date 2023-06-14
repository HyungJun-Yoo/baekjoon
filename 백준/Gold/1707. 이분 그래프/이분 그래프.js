let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

class Queue {
  constructor() {
    this.items = {}
    this.head = 0
    this.tail = 0
  }

  enqueue(item) {
    this.items[this.tail] = item
    this.tail++
  }

  dequeue() {
    const item = this.items[this.head]
    delete this.items[this.head]
    this.head++
    return item
  }

  getLength() {
    return this.tail - this.head
  }
}

let testCase = Number(input[0])
let line = 1
while(testCase--) {
  // [정점의 개수, 간선의 개수]
  let [V, E] = input[line].split(' ').map(Number)

  let graph = []
  for (let i = 1; i <= V; i++) graph[i] = []
  for (let i = 1; i <= E; i++) {
    let [u, v] = input[line + i].split(' ').map(Number)
    graph[u].push(v)
    graph[v].push(u)
  }  

  let visited = new Array(V + 1).fill(-1)
  for (let i = 1; i <= V; i++) {
    if (visited[i] == -1) bfs(i, graph, visited)
  }
  
  line += E + 1
  if (isBipartite(graph, visited)) console.log("YES")
  else console.log("NO")
}

// 미방문 -1, 빨강 0, 파랑 1
function bfs(x, graph, visited) {
  queue = new Queue()
  queue.enqueue(x)
  visited[x] = 0

  while (queue.getLength() != 0) {
    x = queue.dequeue()
    for (let y of graph[x]) {
      if (visited[y] == -1) {
        visited[y] = (visited[x] + 1) % 2
        queue.enqueue(y)
      }
    }
  }
}

function isBipartite(graph, visited) {
  for (let x = 1; x < visited.length; x++) {
    for (let y of graph[x]) {
      if (visited[x] == visited[y]) return false
    }
  }

  return true
}