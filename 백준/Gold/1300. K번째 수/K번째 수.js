let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let k = Number(input[1])
let arr = Array(n).fill().map((value, index) => index + 1)

let start = 1
let end = n * n

let result = 0
while (start <= end) {
  let mid = parseInt((start + end) / 2)

  let total = 0
  for (let x of arr) {
    total += Math.min(parseInt(mid / x), n)
  }

  if (total >= k) {
    result = mid
    end = mid - 1
  }
  else start = mid + 1
}

console.log(result)
