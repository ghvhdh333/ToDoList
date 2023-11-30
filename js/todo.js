// todo.js
const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

// todolist 저장할 배열
let toDos = [];

// JSON.stringify를 통해 객체를 JSON 포맷의 문자열로 변환시키고, localStorage에 저장한다.
function saveToDos () {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

// filter를 사용하여 'x'버튼을 누르면 해당 버튼의 상위 <li> 태그를 제외한 다른 todolist를 추출하여 
// toDos 배열에 재할당하고, 재할당 된 것을 토대로 다시 JSON 포맷의 문자열로 변환시키고, 로컬스토리지에 저장한다.
function deleteToDo (event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(el => el.id !== Number(li.id));
    saveToDos();
}

// handleToDoSubmit를 통해 받은 newToDoObj 객체를 각 분야 알맞게 값을 할당하고,
// 체크유무에 따라 checked 클래스를 추가, 제거하여, 체크효과를 css로 넣어주며, 화면에 나타낸다.
function paintToDo(newToDoObj){
    const list = document.createElement("li");
    list.id = newToDoObj.id;
    
    const checkbox = document.createElement("input")
    checkbox.type = 'checkbox';
    checkbox.classList = 'checkBox';
    
    checkbox.addEventListener('click', handleCheckbox);

    const span = document.createElement("span");
    span.classList = 'toDoSpan';
    span.innerText = newToDoObj.text;

    // 기존의 체크박스의 체크 유무에 대해 보여주는 화면 분기
    if(newToDoObj.checked) {
        span.classList.add('checked');
        checkbox.checked = true;
    } else {
        span.classList.remove('checked');
        checkbox.checked = false;
    }

    function handleCheckbox(event){
        const listChecked = event.target.checked;
        if(listChecked){
            span.classList.add('checked');
            newToDoObj.checked = listChecked;
            saveToDos();
        } else {
            span.classList.remove('checked');
            newToDoObj.checked = listChecked;
            saveToDos();
        }
    }

    const div = document.createElement("div");

    const button = document.createElement("button");
    button.innerText = "❌";

    button.addEventListener("click", deleteToDo);

    div.appendChild(checkbox);
    div.appendChild(span);
    list.appendChild(div);
    list.appendChild(button);

    toDoList.appendChild(list);
}

// input의 submit시 새로고침 되는 것을 방지하기 위해 preventDefault()를 사용하고,
// newTodo에 사용자로부터 입력받은 값을 할당하고, 초기화 시킨다.
// 해당 input 값과, id, 체크유무를 newToDoObj에 할당하고 toDos 배열에 push하고, 
// JSON.stringify를 통해 객체를 JSON 포맷의 문자열로 변환시키고, localStorage에 저장한다.
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        id : Date.now(),
        text : newTodo,
        checked : false,
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

// toDoForm의 input에 값을 입력하고 엔터를 누르면 
// submit 이벤트와, handleToDoSubmit 함수가 실행되도록 한다.
toDoForm.addEventListener("submit", handleToDoSubmit);

// saveToDos 함수를 통해 저장된 (객체를 JSON 포맷의 문자열로 변환된) 값을 불러온다.
const savedToDos = localStorage.getItem("todos");

// savedToDos를 통해 불러온 값이 있으면
// JSON.parse를 통해 JSON 포맷의 문자열을 객체로 변환하고, 
// 모든 요소들을 paintToDo 함수를 통해 화면에 나타낸다.
if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(el => paintToDo(el))
}