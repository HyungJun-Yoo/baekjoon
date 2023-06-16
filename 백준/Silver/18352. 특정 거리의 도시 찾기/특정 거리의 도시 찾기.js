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

// 도시의 개수(n)
// 도로의 개수 (m)
// 거리 정보 (k)
// 출발 도시 (x)
let [n, m, k, x] = input[0].split(' ').map(Number)

let graph = []
for (let i = 1; i <= n; i++) graph[i] = []
for (let i = 1; i <= m; i++) {
  let [prev, next] = input[i].split(' ').map(Number)  
  graph[prev].push(next)
}

let distance = new Array(n + 1).fill(-1)
distance[x] = 0;

let queue = new Queue()
queue.enqueue(x)

while (queue.getLength() != 0) {
  let now = queue.dequeue()

  for (let nextNode of graph[now]) {        
    if (distance[nextNode] == -1) {
      distance[nextNode] = distance[now] + 1
      queue.enqueue(nextNode)
    }
  }
}

let check = false;
for (let i = 1; i <= n; i++) {
  if (distance[i] == k) {
    console.log(i);
    check = true;
  }
}
if (!check) console.log(-1);