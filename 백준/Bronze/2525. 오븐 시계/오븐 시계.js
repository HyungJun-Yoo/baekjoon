let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let line = input[0].split(' ')

let hour = Number(input[0].split(' ')[0])
let minute = Number(input[0].split(' ')[1])
let time = Number(input[1])

if (minute + time >= 60) {
  const sum = (minute + time) 
  minute = sum % 60

  hour += parseInt(sum / 60)

  if (hour > 23) {
    hour = hour % 24
  }
} else {
  minute += time
}

console.log(`${hour} ${minute}`)