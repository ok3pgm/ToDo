const body = document.querySelector('body');
const IMG_NUM = 4;

function showImg(num) {
    const img =new Image();
    img.src = `/src/img/${num+1}.jpg`
    body.prepend(img);
}

function init() {
    const randomNum = getRandom();
    showImg(randomNum);
}

function getRandom () {
    const num =Math.floor(Math.random()*4);
    return num;
}


window.onload = init();