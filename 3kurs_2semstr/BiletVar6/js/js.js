const btn = document.querySelectorAll('.btn');
const rezult = document.querySelector('.result');
const choise = ["⛰️","✂️","📄"];
let countWinUser=0;
let countWinBot=0;
btn.forEach(items => {
    items.addEventListener('click',()=>{
        let randoChoise = choise[Math.floor(Math.random()*choise.length)]
        const combinate = items.textContent+randoChoise;
        if (countWinUser == 3){
            rezult.innerHTML = `<div class="containerDivwin"><p>Победа игрока</p></div>`
        }
        else if (countWinBot == 3){
            rezult.innerHTML = `<div class="containerDivwin"><p>Победа бота</p></div>`
        }
        if(combinate == "⛰️✂️" || combinate== "✂️📄" || combinate=="📄⛰️"){
                rezult.innerHTML = `<div class="containerDivwin"><p>Вы выбрали: ${items.textContent}</p><p>Компьютер выбрал ${randoChoise}</p><p>Победа</p></div>`
                countWinUser++;
        }
        else if (combinate == "⛰️📄" || combinate== "✂️⛰️" || combinate=="📄✂️"){
            rezult.innerHTML = `<div class="containerDivLose"><p>Вы выбрали: ${items.textContent}</p><p>Компьютер выбрал ${randoChoise}</p><p>Поражение</p></div>`;
            countWinBot++;
        }
        else {
            rezult.innerHTML = `<div class="containerDivsurrend"><p>Вы выбрали: ${items.textContent}</p><p>Компьютер выбрал ${randoChoise}</p><p>Ничья</p></div>`;
        }
    })
})