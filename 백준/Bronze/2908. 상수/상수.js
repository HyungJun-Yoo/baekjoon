const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const array = input[0].split(' ').map(str => {
  return Number(str.split('').reverse().join(''))
})

if (array[0] < array[1]) console.log(array[1])
else console.log(array[0])