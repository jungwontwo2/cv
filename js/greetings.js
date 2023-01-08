const loginForm=document.querySelector("#login-form");

const loginInput=document.querySelector("#login-form input");
// const loginButton=loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const link=document.querySelector("a");

const HIDDEN_CLASSNAME="hidden"
const USERNAME_KEY="username"
function save_name(event){
  event.preventDefault()
  const username=loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY,username);
  paint_greetings(username);
}

function handleLinkClick(event){
  event.preventDefault()
  alert("click");

}

function paint_greetings(username){
  greeting.innerText=`Hello ${username}`;
  greeting.classList.toggle(HIDDEN_CLASSNAME);
}

const SavedUsername=localStorage.getItem(USERNAME_KEY)

if(SavedUsername===null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",save_name);
}
else{
  paint_greetings(SavedUsername);
}
