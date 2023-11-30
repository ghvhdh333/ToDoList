const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

// input에 값을 입력하고 로그인 버튼을 눌리면 button의 submit 이벤트를 실행되어 브라우저가 자체적으로 새로고침을 하기 때문에 로그인이 되지 않으므로, 브라우저 자체적으로 새로고침 하는 것을 방지하기 위해 preventDefault()를 사용하여 새로고침을 방지합니다.
// 로그인을 하고 유저가 인위적으로 새로고침을 하면, 그 또한 로그인이 풀리기 때문에 유저의 이름을 기억하기 위해 localStorage를 통해 유저의 정보를 기억합니다.
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello! ${username} :)`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // 유저 이름을 입력하지 않은 상태이면
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    // 유저 이름을 입력된 상태이면
    paintGreetings(savedUsername);
}

