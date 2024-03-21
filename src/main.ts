import './style.css'

const form = document.querySelector('form') as HTMLFormElement;
const todoField = document.getElementById('todoField') as HTMLInputElement;
// const todoBtn = document.createElement('createTodo') as HTMLButtonElement;
const todoContainer = document.getElementById('todoContainer') as HTMLDivElement;

interface todoType{
  id: string,
  title: string,
  isCompleted: boolean
}


form.onsubmit = (e:SubmitEvent) =>{
  e.preventDefault();
  const todoList: todoType[] = [];
  const todo: todoType = {
    id: String(Math.random()*1000),
    title: todoField.value,
    isCompleted: false
  } 
  todoField.value="";
  todoList.push(todo);
  renderTodoList(todoList);
  console.log(todoList)
}

const ul: HTMLUListElement = document.createElement('ul');
  ul.id = 'todoList';


function generateTodoList(title:string, isCompleted:boolean) {
  
  const checkbox:HTMLInputElement = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = isCompleted;
  checkbox.className = 'checkCompleted';
  
  const remove:HTMLButtonElement= document.createElement('button');
  remove.textContent = 'X';
  remove.className ='removeBtn';
  // remove.setAttribute('onclick', deleteTodo);

  const p:HTMLParagraphElement = document.createElement('p');
  p.innerText=title;
  
  const li:HTMLLIElement= document.createElement('li');
  li.className= 'todo';
  li.append(checkbox, p, remove);

  ul.appendChild(li);
  todoContainer.appendChild(ul);
}

function renderTodoList(todoList: todoType[]) {
  todoList.forEach(item=> generateTodoList(item.title, item.isCompleted));
}







