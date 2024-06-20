const onClickAdd = () => {
  //
  const inputText = document.getElementById('add-text').value

  document.getElementById('add-text').value = ''

  createIncompleteTodo(inputText)
}

//渡された引数を基に未完了のタスクを作成
const createIncompleteTodo = (todo) => {
  // liを生成
  const li = document.createElement('li')
  // divを生成
  const div = document.createElement('div')
  div.className = 'list-row'
  // pを生成
  const p = document.createElement('p')
  p.className = 'todo-item'
  p.innerText = todo

  // 完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = '完了';
  completeButton.addEventListener("click", () => {
    // alert("テスト")
    const moveTarget = completeButton.closest('li')
    completeButton.nextElementSibling.remove()
    completeButton.remove()
    // 戻すボタンの生成
    const backButton = document.createElement('button')
    backButton.innerText = '戻す'
    backButton.addEventListener('click',() =>{
      //タスクの内容を取得して、todoTextに変数
      const todoText =backButton.previousElementSibling.innerText
      createIncompleteTodo(todoText)
      // クリックされたタスク自身を削除する
      backButton.closest('li').remove();
    })
    moveTarget.firstElementChild.appendChild(backButton)

    // 完了タスクを完了済エリアに移動
    document.getElementById('complete-list').appendChild(moveTarget)
  })

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = '削除'
  deleteButton.addEventListener("click", () => {
    // alert("テスト")
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget)
  })

  div.appendChild(p)
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div)

  document.getElementById('incomplete-list').appendChild(li)
}


document.getElementById('add-button').addEventListener('click', onClickAdd)