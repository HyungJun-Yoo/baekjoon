const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function palindrome(x) {
  return x === x.split('').reverse().join('')
}

let testCase = Number(input[0])

for (let i = 1; i <= testCase; i++) {
  let data = input[i]

  if (palindrome(data)) console.log(0)
  else {
    let bool = false
    let n = data.length

    for (let j = 0; j < parseInt(n / 2); j++) {
      if (data[j] !== data[n - j - 1]) {
        if (palindrome(data.slice(0, j) + data.slice(j + 1, n))) bool = true
        if (palindrome(data.slice(0, n - j - 1) + data.slice(n - j, n))) bool = true
        break
      }
    }

    if (bool) console.log(1)
    else console.log(2)
  }
}