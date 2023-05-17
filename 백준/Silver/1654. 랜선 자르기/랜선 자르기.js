let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// k = 랜선의 개수, n = 필요한 랜선의 개수
let [k, n] = input[0].split(' ').map(Number)
// 랜선이 담겨있는 배열
let lan = []
for (let i = 1; i <= k; i++) {
  lan.push(Number(input[i]))
}

let start = 1
let end = lan.reduce((a, b) => Math.max(a, b))
let result = 0

while (start <= end) {
  let mid = parseInt((start + end) / 2)
  
  let total = 0
  for (let x of lan) {
    total += parseInt(x / mid)
  }
  
  if (total >= n) {
    result = mid
    start = mid + 1    
  }
  else {
    end = mid - 1
  }
}

console.log(result)
