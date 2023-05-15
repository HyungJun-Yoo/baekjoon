const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let arr = []

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(' ').concat(i))
}

arr.sort((a, b) => {
  let a_age = Number(a[0])
  let a_join = a[2]
  
  let b_age = Number(b[0])
  let b_join = b[2]

  if (a_age === b_age) return a_join - b_join
  else return a_age - b_age
})

let result = ''
for (let item of arr) {
  result += `${item[0]} ${item[1]} \n`
}
console.log(result)