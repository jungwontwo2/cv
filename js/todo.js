const todoform=document.querySelector("#todo-form");
const todoInput=todoform.querySelector("input");

const todolist=document.querySelector("#todo-list");

const todos_key="todos";
let todos=[];

function saveTodos(){
    localStorage.setItem(todos_key,JSON.stringify(todos));
}

function deleteTodos(){

}
function deleteTodo(event){
    const li=(event.target.parentElement);
    todos=todos.filter(todo=>todo.id!==parseInt(li.id));
    saveTodos();
    li.remove();
}
// console.log(todolist);
function paintTodo(newTodo){
    const li=document.createElement("li");
    const span=document.createElement("span");
    span.innerText=newTodo.text;
    li.id=newTodo.id;
    const button=document.createElement("button");
    button.innerText="X";

    button.addEventListener("click",deleteTodo)
    li.appendChild(span);
    li.appendChild(button);

    console.log(li);
    todolist.appendChild(li);
}


function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo=todoInput.value;
    //console.log(newTodo);
    todoInput.value=""
    const newTodoObj={
        text:newTodo,
        id:Date.now(),
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

function paintItemFromLocalStorage(item){
    paintTodo(item);
}

todoform.addEventListener("submit",handleTodoSubmit)
const savedTodos=localStorage.getItem(todos_key);

if(savedTodos!==null){
    const parsedTodos=JSON.parse(savedTodos);
    todos=parsedTodos;
    console.log(todos);
    parsedTodos.forEach(paintTodo);
}