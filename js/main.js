import { postTodo } from "./apiStore.js";
import { addList } from "./addList.js";


//초기화 코드
const todoInput = document.querySelector('.todo-input');
const addBtn = document.querySelector('.add-btn');


// 최초호출
addList();


// 리스트 버튼 추가
addBtn.addEventListener('click', async () => {
  if(!todoInput.value) {
    alert('내용을 입력해 주세요!');
    return;
  }
  await postTodoList({ title: todoInput.value });
  todoInput.value = '';
});


// 리스트 엔터키 추가
todoInput.addEventListener('keypress', function(e) {
  if(e.keyCode === 13) {
    if(!todoInput.value) {
      alert('내용을 입력해 주세요!');
      return;
    }
    postTodoList({ title: todoInput.value })
    todoInput.value = '';
  }
});


// 리스트 랜더링
async function postTodoList ({ title, order }) {
  await postTodo({ title, order });
  await addList();
}

