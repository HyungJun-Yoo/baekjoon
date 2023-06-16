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

// 역의 개수(n)
// 간선의 개수(k)
// 하이퍼튜브의 개수(m)
let [n, k, m] = input[0].split(' ').map(Number)

// 그래프 정보(n개의 역과 m개의 하이퍼튜브 모두 노드)
let graph = []
for (let i = 1; i <= n + m; i++) graph[i] = []
for (let i = 1; i <= m; i++) {
  let arr = input[i].split(' ').map(Number)
  for (let x of arr) {
    graph[x].push(n + i) // 노드 -> 하이퍼 튜브
    graph[n + i].push(x) // 하이퍼 튜브 -> 노드
  }
}

let visited = new Set([1])
let queue = new Queue()
queue.enqueue([1, 1]) //[거리, 노드번호]
let found = false

while (queue.getLength() != 0) {
  let [dist, now] = queue.dequeue()
  
  // n번 노드의 도착한 경우
  if (now == n) {
    // 절반은 하이퍼 튜브
    console.log(parseInt(dist / 2) + 1)
    found = true
    break
  }

  for (let y of graph[now]) {
    if (!visited.has(y)) {      
      queue.enqueue([dist + 1, y])
      visited.add(y)
    }
  }
}

if (!found) console.log(-1)