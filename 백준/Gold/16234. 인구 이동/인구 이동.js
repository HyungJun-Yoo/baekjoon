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

let [n, l, r] = input[0].split(' ').map(Number)

let graph = []
for (let i = 1; i <= n; i++) {
  let row = input[i].split(' ').map(Number)
  graph.push(row)
}

let dx = [-1, 0, 1, 0]
let dy = [0, -1, 0, 1]
let totalCount = 0

// 더 이상 인구 이동을 할 수 없을 때까지 반복
while (true) {
  let union = Array.from(Array(n), () => Array(n).fill(-1))
  let index = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 해당 나라가 아직 처리되지 않았다면
      if (union[i][j] == -1) {
        bfs(i, j, index, union)
        index++
      }
    }
  }

  // 모든 인구 이동이 끝난 경우
  if (index == n * n) break
  totalCount += 1
}

// 인구 이동 횟수
console.log(totalCount)

// 특정 위치에서 출발하여 모든 연합을 체크한 뒤에 데이터 갱신
function bfs(x, y, index, union) {
  // x, y의 위치와 연결된 나라(연합) 정보를 담는 리스트
  let united = [[x, y]] 
  let queue = new Queue()  
  queue.enqueue([x, y])
  // 현재 연합의 번호 할당
  union[x][y] = index
  // 현재 연합의 전체 인구 수
  let summary = graph[x][y]
  // 현재 연합의 국가 수
  let cnt = 1

  while (queue.getLength() != 0) {
    let [x, y] = queue.dequeue()
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i]
      let ny = y + dy[i]

      if (0 <= nx && nx < n && 0 <= ny && ny < n && union[nx][ny] == -1) {
        // 옆에 있는 나라와 인구 차이가 L명 이상, R명 이하
        let dif = Math.abs(graph[nx][ny] - graph[x][y])
        if (l <= dif && dif <= r) {
          queue.enqueue([nx, ny])
          union[nx][ny] = index
          summary += graph[nx][ny]          
          cnt += 1
          united.push([nx, ny])
        }
      }
    }    
  }

  // 연합 국가끼리 인구를 분배
  for (let unit of united) {      
    let [i, j] = unit
    graph[i][j] = parseInt(summary / cnt)
  }
}
