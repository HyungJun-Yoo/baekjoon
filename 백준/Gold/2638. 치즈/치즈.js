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

let [n, m] = input[0].split(' ').map(Number)
let graph = []
for (let i = 1; i <= n; i++) {
  let row = input[i].split(' ').map(Number)
  graph.push(row)
}

let dx = [-1, 1, 0, 0]
let dy = [0, 0, -1, 1]

let result = 0;
while (true) {
  bfs()
  if (melt()) {
    // 전부 녹았다면
    console.log(result)
    break
  }
  else result += 1
}

function bfs() {
  let visited = []
  for (let i = 0; i < n; i++) visited.push(new Array(m).fill(false))
  visited[0][0] = true
  let queue = new Queue()
  queue.enqueue([0, 0])
  while (queue.getLength() != 0) {
    let [x, y] = queue.dequeue()
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i]
      let ny = y + dy[i]

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue
      if (!visited[nx][ny]) {
        if (graph[nx][ny] >= 1) graph[nx][ny] += 1
        else {
          queue.enqueue([nx, ny])
          visited[nx][ny] = true
        }
      }
    }
  }
}

function melt() {
  // 더 녹일 치즈가 없는지 여부
  let finish = true

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 녹일 치즈라면
      if (graph[i][j] >= 3) {
        graph[i][j] = 0 // 녹이기
        finish = false
      }
      else if (graph[i][j] == 2) graph[i][j] = 1 // 한 면만 닿은 경우 무시
    }
  }

  return finish
}