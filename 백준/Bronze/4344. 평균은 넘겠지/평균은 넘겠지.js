const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const testCase = Number(input[0])

for (let i = 1; i <= testCase; i++) {
  const array = input[i].split(' ').map(Number)
  // 학생의 수
  const student = array[0]  
  let avgOver = 0
  let sum = 0
  let avg = 0

  // 평균 점수 구하기
  for (let j = 1; j <= student; j++) {
    sum += array[j]  
  }

  avg = (sum / student)

  // 평균을 넘은 학생 수 구하기
  for (let j = 1; j <= student; j++) {
    if (avg < array[j]) {
      avgOver += 1
    }
  }

  // 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력
  console.log(`${(avgOver / student * 100).toFixed(3)}%`)
}
