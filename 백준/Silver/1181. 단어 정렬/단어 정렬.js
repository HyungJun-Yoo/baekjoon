const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let words = new Set()

for (let i = 1; i <= n; i++) {
  words.add(input[i])
}

words = [...words]

words.sort((a, b) => {
  if (a.length === b.length) {
    if (a > b) return 1
    else return -1
  }
  else return a.length - b.length
})

let result = ''

for (let i = 0; i < words.length; i++) {
  result += words[i] + '\n'
}

console.log(result)