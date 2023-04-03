const toDoForm = document.querySelector('.js-toDoForm'),
      toDoInput = toDoForm.querySelector('input'),
      toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos'
let toDoArr = [];
function loadToDos () {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const newLoadedToDos = JSON.parse(loadedToDos);
        newLoadedToDos.forEach(function(toDo) {
            const task =toDo.name;
            showToDo(task);
        });
    } else {

    }
}
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDoArr));
}

function showToDo(text) {
    const li = document.createElement('li');
    const dellBtn = document.createElement('button');
    // dellBtn.innerHTML = '<input type="image" src="img/free-icon-cancel-594864.png">';
    dellBtn.classList.add('close');
    const span = document.createElement('span');
    dellBtn.addEventListener('click', deleteToDo);
    span.innerHTML =`${text}`;
    li.appendChild(dellBtn);
    li.appendChild(span);
    const newID = toDoArr.length+1;
    li.id = newID;
    toDoList.appendChild(li);
    const toDoObj = {
        name: text,
        id: newID
    };
    toDoArr.push(toDoObj);
    saveToDos();
}

function submitHandler (e) {
    e.preventDefault();
    const currentValue = toDoInput.value;
    showToDo(currentValue);
    toDoInput.value = '';
}

function deleteToDo (e) {
    const {target} = e;
    const toDoTarget = target.parentElement;
    toDoTarget.remove();
    const idTarget = toDoTarget.id;
    const filterToDos = toDoArr.filter(function(toDo) {
        return +toDo.id !== +toDoTarget.id;
    });
    toDoArr = filterToDos;
    saveToDos();
    location.reload();
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', submitHandler);
}
window.onload = init();