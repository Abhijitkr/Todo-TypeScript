import './style.css'

const form = document.querySelector('form') as HTMLFormElement;
const todoField = document.getElementById('todoField') as HTMLInputElement;
const todoBtn = document.createElement('createTodo') as HTMLButtonElement;

interface todoType{
  id: string,
  title: string,
  isCompleted: boolean
}

form.onsubmit = (e:SubmitEvent) =>{
  e.preventDefault();
  const todo: todoType = {
    id: String(Math.random()*1000),
    title: todoField.value,
    isCompleted: false
  } 
  todoField.value="";
  console.log(todo)
}


const ul = document.createElement('ul') as HTMLUListElement;
const li = document.createElement('li') as HTMLLIElement;
const checkbox = document.createElement('input') as HTMLInputElement;
const remove = document.createElement('p') as HTMLParagraphElement;



