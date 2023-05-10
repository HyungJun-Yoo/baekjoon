const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const result = input[0].trim().split(' ')

if (result[0] === '') console.log(0)
else console.log(result.length)