const form = document.querySelector('.js-form'),
      input = form.querySelector('input'),
      welcome = document.querySelector('.js-welcome');
const USER_NAME = 'currentUserName';

function loadUserName() {
    const currentUserName = localStorage.getItem(USER_NAME);
    if (currentUserName === null) {
        askForUserName();
    } else {
        showWelcome(currentUserName);
    }
}
function submitHandler(e) {
    e.preventDefault();
    const inputValue = input.value;
    localStorage.setItem('currentUserName', inputValue);
    form.classList.remove('showing');
    welcome.classList.add('showing');
    welcome.innerText = `Hello, ${inputValue}`;
}
function askForUserName () {
    form.classList.add('showing');
    form.addEventListener('submit', submitHandler)
}
function showWelcome (text) {
    welcome.innerText = `Hello, ${text}`;
    welcome.classList.add('showing');
    form.classList.remove('showing');
}

function init () {
    loadUserName();
}

window.onload = init();