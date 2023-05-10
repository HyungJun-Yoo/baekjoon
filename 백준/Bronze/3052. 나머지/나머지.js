const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const mySet = new Set()
const array = input.map(Number)
const num = 42

for (let i = 0; i < 10; i++) {
  mySet.add(array[i] % num)
}

console.log(mySet.size)