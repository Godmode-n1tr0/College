


// let a = 5;
// let b = 6;

// console.log(a+b);

let con = document.querySelector('.score1');
let con2 = document.querySelector('.score2');
let resulti = document.querySelector('.resultik');
let result1 = 0;
let result2 = 0;


function ClickBtn(){
    result1 = con.textContent = Math.floor(Math.random() * 6);
    result2 = con2.textContent = Math.floor(Math.random() * 6);
}
function ClickBtn1(){
    if (result1 > result2){
        resulti.textContent = "TEAM 1 WIN";
        con.style.background = "red";
        con2.style.background = "black";
    }
    else if (result2 > result1){
        resulti.textContent = "TEAM 2 WIN";
        con2.style.background = "blue";
        con.style.background = "black";

    }
    else{
        resulti.textContent = "DRAW";
        con2.style.background = "yellow";
        con.style.background = "yellow";
    }
}

