const onClickAdd =()=>{
  //
  const inputText = document.getElementById('add-text').value

  document.getElementById('add-text').value = ''

  // liを生成
const li =document.createElement('li')
// divを生成
const div =document.createElement('div')
div.className = 'list-row'
// pを生成
const p =document.createElement('p')
p.className ='todo-item'
p.innerText = inputText

// 完了ボタン
const completeButton = document.createElement("button");
completeButton.innerText = '完了';
completeButton.addEventListener("click", ()=>{
  alert("テスト")
})

// 削除ボタン
const deleteButton =document.createElement("button");
deleteButton.innerText ='削除'
deleteButton.addEventListener("click", ()=>{
  // alert("テスト")
  const deleteTarget = deleteButton.closest("li");
  document.getElementById("incomplete-list").removeChild(deleteTarget)

})

div.appendChild(p)
div.appendChild(completeButton);
div.appendChild(deleteButton);
li.appendChild(div)

document.getElementById('incomplete-list').appendChild(li)

console.log(li)
console.log(completeButton)
console.log(deleteButton)
}


document.getElementById('add-button').addEventListener('click',onClickAdd)