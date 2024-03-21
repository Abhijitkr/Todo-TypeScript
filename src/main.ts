import "./style.css";

const form = document.querySelector("form") as HTMLFormElement;
const todoField = document.getElementById("todoField") as HTMLInputElement;
// const todoBtn = document.createElement('createTodo') as HTMLButtonElement;
const todoContainer = document.getElementById(
  "todoContainer"
) as HTMLDivElement;

interface todoType {
  id: string;
  title: string;
  isCompleted: boolean;
}

const todoList: todoType[] = [];
form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const todo: todoType = {
    id: String(Math.random() * 1000),
    title: todoField.value,
    isCompleted: false,
  };
  todoField.value = "";
  todoList.push(todo);
  renderTodoList(todoList);
  console.log(todoList);
};

const ul: HTMLUListElement = document.createElement("ul");
ul.id = "todoList";

function deleteTodo(id: string) {
  const idx = todoList.findIndex((todo) => todo.id === id);
  todoList.splice(idx, 1);
  renderTodoList(todoList);
}

function generateTodoList(id: string, title: string, isCompleted: boolean) {
  const checkbox: HTMLInputElement = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = isCompleted;
  checkbox.onchange = () => {
    todoList.findIndex((todo) => {
      if (todo.id === id) todo.isCompleted = checkbox.checked;
    });
    p.className = checkbox.checked ? "checkCompleted" : "";
  };

  const remove: HTMLButtonElement = document.createElement("button");
  remove.textContent = "X";
  remove.className = "removeBtn";
  remove.onclick = () => deleteTodo(id);

  const p: HTMLParagraphElement = document.createElement("p");
  p.className = checkbox.checked ? "checkCompleted" : "";
  p.innerText = title;

  const li: HTMLLIElement = document.createElement("li");
  li.className = "todo";
  // li.id = id;
  li.append(checkbox, p, remove);

  ul.appendChild(li);
  todoContainer.appendChild(ul);
}

function renderTodoList(todoList: todoType[]) {
  ul.innerHTML = "";
  todoList.forEach((item) =>
    generateTodoList(item.id, item.title, item.isCompleted)
  );
}
