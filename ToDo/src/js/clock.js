const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    if (hours<10) {
        resultHours = `0${hours}`
    } else {
        resultHours = `${hours}`
    }
    if (minutes<10) {
        resultMinutes = `0${minutes}`
    } else {
        resultMinutes = `${minutes}`
    }
    renderTime(resultHours, resultMinutes);
};
function renderTime () {
    clockTitle.innerHTML = `${resultHours}:${resultMinutes}`;
}
function init () {
    setInterval(() => {getTime()}, 1);
}
window.onload = init();