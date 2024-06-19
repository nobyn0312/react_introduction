const onClickAdd =()=>{
  //
  const inputText = document.getElementById('add-text').value
  document.getElementById('add-text').value = ''

const li =document.createElement('li')
const div =document.createElement('div')
div.className = 'list-row'


const p =document.createElement('p')
p.className ='todo-item'
p.innerText = inputText

// 完了ボタン
const completeButton = document.createElement("button");
completeButton.innerText = '完了';

// 削除ボタン
const deleteButton =document.createElement("button");
deleteButton.innerText ='削除'

div.appendChild(p)
div.appendChild(completeButton);
div.appendChild(deleteButton);
li.appendChild(div)

console.log(li)
console.log(completeButton)
console.log(deleteButton)
}


document.getElementById('add-button').addEventListener('click',onClickAdd)