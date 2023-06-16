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

let n = Number(input[0])
let line = Number(input[1])

let graph = []
for (let i = 1; i <= n; i++) graph[i] = []
for (let i = 2; i < 2 + line; i++) {
  let [x, y] = input[i].split(' ').map(Number)
  graph[x].push(y)
  graph[y].push(x)
}

let visited = new Array(n + 1).fill(false)
visited[1] = true
let queue = new Queue()
queue.enqueue([1, 0])

let cnt = 0
while (queue.getLength() != 0) {
  let [cur, dist] = queue.dequeue()

  if (0 < dist && dist <= 2) {
    cnt++
  }

  for (let x of graph[cur]) {
    if (visited[x] == false) {
      visited[x] = true
      queue.enqueue([x, dist + 1])
    }
  }
}


console.log(cnt)