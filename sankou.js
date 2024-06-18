const num = 1300

console.log(num.toLocaleString())

const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力'
console.log(formattedNum)

const checkSum = (num1,num2)=> {
  return num1 + num2 > 100 ? "100を超えています":"100未満です"
}
console.log(checkSum(50,51))
console.log(checkSum(50,30))

