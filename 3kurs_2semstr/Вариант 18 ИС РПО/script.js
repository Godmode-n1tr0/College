const left = document.querySelector('.left');
const right = document.querySelector('.right');

const items = (document.querySelectorAll('img')).length - 1;
let i = 0;

left.addEventListener('click', () => {
    if (i !== 0){
        i--;
        document.querySelector('.slider').style.transform = `translateX(${-100 * i}%)`;
    }
    else{
        document.querySelector('.slider').style.transform = `translateX(${ items * -100}%)`;
        i = items;
    }
})
right.addEventListener('click', () => {
    if (i !== items){
        i++;
        document.querySelector('.slider').style.transform = `translateX(${-100 * i}%)`;
    }
    else{
        document.querySelector('.slider').style.transform = `translateX(0%)`;
        i = 0;
    }
})
