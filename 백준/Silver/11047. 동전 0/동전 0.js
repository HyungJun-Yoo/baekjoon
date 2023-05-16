const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [n, k] = input[0].split(' ').map(Number)

// 동전 담기
let money = []
for (let i = 1; i <= n; i++) {
  money.push(Number(input[i]))
}

// K원을 만드는데 필요한 동전 개수 구하기
let count = 0
for (let i = money.length - 1; i >= 0 ;i--) {
  if (k >= money[i]) {
    count += parseInt(k / money[i])
    k = parseInt(k % money[i])      
  }    
}


console.log(count)