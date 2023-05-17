let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, m] = input[0].split(' ').map(Number)
let tree = input[1].split(' ').map(Number)

let start = 0
let end = tree.reduce((a, b) => Math.max(a, b))
let result = 0

while (start <= end) {
  let mid = parseInt((start + end) / 2)
  let total = 0
  
  for (let x of tree) {
    if (mid < x) {
      total += (x - mid)
    }
  }

  if (total >= m) {
    result = mid
    start = mid + 1
  } else {
    end = mid - 1
  }
}

console.log(result)