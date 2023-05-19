let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, m] = input[0].split(' ').map(Number)
let arr = []
for (let i = 0; i < n; i++) {
  arr[i] = i + 1
}
let result = []
let answer = ''

dfs(0, m)
console.log(answer)

function dfs(cur, depth) {
  if (cur === depth) {    
    answer += `${result.join(' ')} \n`
    return
  }

  for (let x of arr) {
    result.push(x)
    dfs(cur + 1, depth)
    result.pop()
  }
}