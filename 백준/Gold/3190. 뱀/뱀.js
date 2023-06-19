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

// 보드의 크기
let n = Number(input[0])
// 사과의 개수
let k = Number(input[1])
let data = []
for (let i = 0; i < n + 1; i++) {
  data.push(new Array(n + 1).fill(0))
}

for (let i = 2; i <= k + 1; i++) {
  // 사과가 있는 곳은 1로 표시
  let [a, b] = input[i].split(' ').map(Number)
  data[a][b] = 1
}

// 뱀의 방향 변환 횟수
let l = Number(input[k + 2])
let info = []
for (let i = k + 3; i < k + 3 + l; i++) {
  let [x, c] = input[i].split(' ')
  info.push([Number(x), c])
}

// 처음에는 오른쪽을 보고 있으므로 (동, 남, 서, 북)
let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]

function turn(direction, c) {
  if (c == 'L') {
    direction = direction - 1
    if (direction == -1) direction = 3
  }
  else direction = (direction + 1) % 4
  return direction
}

// 뱀의 머리 위치
let [x, y] = [1, 1]
// 뱀이 존재하는 위치는 2로 표시
data[x][y] = 2
// 처음에는 동쪽
let direction = 0
// 시작한 뒤에 지난 '초' 시간
let time = 0
// 다음에 회전할 정보
let index = 0
let q = new Queue()
// 뱀이 차지하고 있는 위치 정보 (꼬리가 앞쪽)
q.enqueue([x, y])

while (true) {
  let nx = x + dx[direction]
  let ny = y + dy[direction]
  // 맵 범위 안에 있고, 뱀의 몸통이 없는 위치라면
  if (1 <= nx && nx <= n && 1 <= ny && ny <= n && data[nx][ny] != 2) {
    // 사과가 없다면 이동 후에 꼬리 제거
    if (data[nx][ny] == 0) {
      data[nx][ny] = 2
      q.enqueue([nx, ny])
      let [px, py] = q.dequeue()
      data[px][py] = 0
    }
    // 사과가 있다면 이동 후에 꼬리 그대로 두기
    if (data[nx][ny] == 1) {
      data[nx][ny] = 2
      q.enqueue([nx, ny])
    }
  }
  // 벽이나 뱀의 몸통과 부딪혔다면
  else {
    time += 1
    break
  }

  // 다음 위치로 머리를 이동
  [x, y] = [nx, ny]
  time += 1
  // 회전할 시간인 경우 회전
  if (index < l && time == info[index][0]) {
    direction = turn(direction, info[index][1])
    index += 1
  }
}

console.log(time)