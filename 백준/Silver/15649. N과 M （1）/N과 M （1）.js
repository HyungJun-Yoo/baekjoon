let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, m] = input[0].split(' ').map(Number)
let arr = []

function possible(num) {
  for (let x of arr) {
    if (x === num) return false
  }

  return true
}

let result = ''
function dfs(depth) {
  if (depth > m) {
    result += `${arr.join(' ')} \n`
    return
  }

  for (let i = 1; i <= n; i++) {
    if (!possible(i)) continue
    arr.push(i)
    dfs(depth + 1)
    arr.pop()
  }
}

dfs(1)
console.log(result)