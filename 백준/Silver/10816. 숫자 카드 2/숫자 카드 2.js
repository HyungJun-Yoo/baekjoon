let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let card = input[1].split(' ').map(Number)
card.sort((a, b) => a - b)

let m = Number(input[2])
let arr = input[3].split(' ').map(Number)

let result = []

for (let item of arr) {  
  let left = leftValue(arr, item, 0, n)

  let right = -1
  if (left >= 0)
    right = rightValue(arr, item, 0, n)
    

  if (left >= 0 && right >= 0)
    result.push(right - left)
  else
    result.push(0)
}

console.log(result.join(' '))

function leftValue(arr, target, start, end) {
  let flag = false
  
  while (start < end) {
    let mid = parseInt((start + end) / 2)    

    if (card[mid] === target) {
      flag = true
      end = mid
    }

    if (card[mid] < target) start = mid + 1
    else end = mid
  }

  if (flag) return end
  else return -1
}

function rightValue(arr, target, start, end) {
  let flag = false
  
  while (start < end) {
    let mid = parseInt((start + end) / 2)  

    if (card[mid] === target) {
      flag = true
      start = mid
    }

    if (card[mid] <= target) start = mid + 1
    else end = mid
  }

  if (flag) return end
  else return -1
}