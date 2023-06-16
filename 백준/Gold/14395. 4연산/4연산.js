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

let [s, t] = input[0].split(' ').map(Number)
queue = new Queue()
queue.enqueue([s, ''])
let visited = new Set([s])
let found = false

if (s == t) {
  console.log(0)
  process.exit()
}

while (queue.getLength() != 0) {
  let [value, opers] = queue.dequeue()

  if (value > 1e9) continue
  // 목표값에 도달한 경우
  if (value == t) {
    console.log(opers)
    found = true
    break
  }

  for (let oper of ['*', '+', '-', '/']) {
    let nextValue = value
    if (oper == '*') nextValue *= value
    if (oper == '+') nextValue += value
    if (oper == '-') nextValue -= value
    if (oper == '/' && value != 0) nextValue = 1
    if (!visited.has(nextValue)) {      
      queue.enqueue([nextValue, opers + oper])
      visited.add(nextValue)
    }
  }
}

if (!found) console.log(-1)