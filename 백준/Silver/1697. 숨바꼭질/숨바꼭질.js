let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

class Queue {
  constructor() {
    this.items = {}
    this.head = 0
    this.tail = 0
  }

  insert(item) {
    this.items[this.tail] = item
    this.tail++
  }

  delete() {
    const item = this.items[this.head]
    delete this.items[this.head]
    this.head++
    return item
  }

  getLength() {
    return this.tail - this.head
  }
}

const Max = 100001
let [n, k] = input[0].split(' ').map(Number)
visited = new Array(Max).fill(0)

function bfs() {
  queue = new Queue()
  queue.insert(n)

  while (queue.getLength() != 0) {
    let cur = queue.delete()
    if (cur == k) {
      return visited[cur]
    }

    for (let ntx of [cur - 1, cur + 1, cur * 2]) {
      if (ntx < 0 || ntx >= Max) continue
      if (visited[ntx] == 0) {
        visited[ntx] = visited[cur] + 1
        queue.insert(ntx)
      }
    }
  }
}

console.log(bfs())