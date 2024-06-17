const nameArray = ['山田','田中','井上']

// for(i = 0; i < nameArray.length; i++){
//   console.log(nameArray[i])
// }


const nameArray2 = nameArray.map((name)=> {
  return name
});
console.log(nameArray2)

// filter
const numArray =[1,2,3,4,5]
const newNumArr = numArray.filter((num) => {
  return num % 2 === 1 ;
})
console.log(newNumArr)


// map
nameArray.map((name,index)=> console.log(`${index + 1}番目は${name}です`))

//
const newNameArrayKeisyo = nameArray.map(name => name !== '井上' ? name + 'さん' : name);
console.log(newNameArrayKeisyo); 
