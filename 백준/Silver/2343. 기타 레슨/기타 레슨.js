let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [N, M] = input[0].split(' ').map(Number)
let arr = input[1].split(' ').map(Number)

// 이분 탐색
let start = Math.max(...arr)
let end = arr.reduce((a, b) => a + b)
let answer = -1

while (start <= end) {
  let mid = parseInt((start + end) / 2)

  let blueray_num = 1
  let remain = mid // 남은 용량

  for (x of arr) {
    if (remain < x) {
      blueray_num += 1
      remain = mid
    }

    remain -= x
  }

  if (blueray_num <= M) {
    answer = mid
    end = mid - 1 // [start, mid - 1]
  } else {
    start = mid + 1
  }
}

console.log(answer)