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
  
  peek() {
    return this.items[this.head]
  }

  getLength() {
    return this.tail - this.head
  }
}

let dx = [-2, -2, -1, -1, 1, 1, 2, 2]
let dy = [-1, 1, -2, 2, -2, 2, -1, 1]

let testCase = Number(input[0])
let i = 1
while (testCase--) {
  let map = Number(input[i])
  // 현재 위치
  let [x, y] = input[i + 1].split(' ').map(Number)
  // 목표 위치
  let [targetX, targetY] = input[i + 2].split(' ').map(Number)

  let visited = []
  for (let i = 0; i < map; i++) visited.push(new Array(map).fill(0))

  console.log(bfs(x, y, visited, map, targetX, targetY))
  i += 3
}

function bfs(x, y, visited, map, targetX, targetY) {
  queue = new Queue()
  queue.enqueue([x, y])
  visited[x][y] = 1

  while (queue.getLength() != 0) {
    let cur = queue.dequeue()
    x = cur[0]
    y = cur[1]

    for (let i = 0; i < 8; i++) {
      let nx = x + dx[i]
      let ny = y + dy[i]
      if (nx < 0 || nx >= map || ny < 0 || ny >= map) continue
      if (visited[nx][ny] == 0) {
        visited[nx][ny] = visited[x][y] + 1
        queue.enqueue([nx, ny])
      }
    }
  }

  return visited[targetX][targetY] - 1
}