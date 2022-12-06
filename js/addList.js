import { getTodo, deleteTodo, editTodo, postTodo } from "./apiStore.js";
import { dateSet } from "./dateSet.js";


// 리스트 생성
export async function addList () {
  const todoListEl = document.querySelector('.todo-list');
  const Todos = await getTodo();
  todoListEl.innerHTML = '';

  for(let i = 0; i < Todos.length; i++) {
    const todoList = document.createElement('div');
    todoList.dataset.id = Todos[i].id;
    todoList.dataset.order = Todos[i].order;
    todoList.classList.add('list');
  

    const checkBox = document.createElement('input');
    checkBox.classList.add('check-box')
    checkBox.type = 'checkbox';
    let done = false;
    if(Todos[i].done) checkBox.checked = true;
  
    const title = document.createElement('span');
    title.classList.add('title');
    const titleEl = Todos[i].title;
    title.append(titleEl);
    title.contentEditable = 'false';


    const dateAndBtn = document.createElement('div');
    dateAndBtn.classList.add('date-btn');

    const addDate = document.createElement('span');
    addDate.classList.add('date');
    addDate.innerHTML = dateSet(Todos[i].createdAt);
  
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = "delete";
    
    todoList.append(checkBox);
    todoList.append(title);
    dateAndBtn.append(addDate);
    dateAndBtn.append(deleteBtn);
    todoList.append(dateAndBtn);
    todoListEl.append(todoList);
     
    
    // 체크박스
    checkBox.addEventListener('change', async (e) => {
      const id = Todos[i].id;
      const order = Todos[i].order;
      if(e.currentTarget.checked) {
        done = true;
        title.style.textDecoration = 'line-through'
      }
      await editTodo(id, { title: title.textContent, done, order });
    });
  

    // 삭제 버튼
    deleteBtn.addEventListener('click', async (e) => {
      const todoId = todoList.dataset.id;
      await deleteTodo(todoId);
      todoList.remove();
    });


    // 수정하기
    title.addEventListener('click',  async (e) => {
      const id = Todos[i].id;
      const order = Todos[i].order;
      const done = Todos[i].done;
      title.contentEditable = 'true';
      title.addEventListener('keydown', async (e) => {
        if(e.key === 'Enter') {
          title.contentEditable = 'false';
          await editTodo(id, { title: title.textContent, done, order });
        }
      })
    })

  }
}

