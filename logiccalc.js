// 論理演算子
// truthy falsy

const val = "ABC"

if(val){
  console.log("truthy")
}else{
  console.log("falsy")
}

const flag1 =true
const flag2 =true

if(flag1){
  console.log("truthy")
}else{
  console.log("falsy")
}

if(flag1 || flag2 ){
  console.log('1か２はtrue')
}

if(flag1 && flag2){
  console.log('1も2もtruthe')
}


// むずすぎ
// https://www.udemy.com/course/modern_javascipt_react_beginner/learn/lecture/40837994#overview