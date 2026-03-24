const point = document.querySelector('.coin');
const btn = document.querySelector('.btn');
let deg = 0;

let i = 1;

btn.addEventListener('click', () => {
    deg += 3600;
    i++;
    point.style.transform = `rotate3d(-1, 1, -1, ${deg}deg)`;
    setTimeout(() => {
       point.children[Math.round(Math.random())].style.zIndex = i;
    }, 500);
});
