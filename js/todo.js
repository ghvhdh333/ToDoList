const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function saveToDos () {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo (event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(el => el.id !== Number(li.id));
    saveToDos();
}


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

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    console.log(event)
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


toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(el => paintToDo(el))
}
