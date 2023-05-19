let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, m] = input[0].split(' ').map(Number)
let arr = []
for (let i = 0; i < n; i++) arr.push(i + 1)
let result = []
let answer = ''

dfs(arr, 0, m)
console.log(answer)

function dfs(arr, cur, depth) {
  if (cur === depth) {   
    answer += `${result.join(' ')} \n`
    return
  }  

  for (let x of arr) {
    if (result[cur - 1] > x) continue
    result.push(x)
    dfs(arr, cur + 1, depth)
    result.pop()
  }
}