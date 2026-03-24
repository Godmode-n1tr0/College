const btn = document.querySelector('.btn');

const toValue = document.querySelector('#to_value');
const fromValue = document.querySelector('#from_value');

const inputNum = document.querySelector('.text');

const result = document.querySelector('.result');

btn.addEventListener('click', () => {
    if (toValue.value == " " || fromValue.value == " "){
        alert("Выберите курсы");
        return result.textContent = "Ошибка";
    }
    else if (toValue.value == fromValue.value){
        alert("Выберите 2 разных курса");
        return result.textContent = inputNum.value;
    }
    else if (inputNum.value == ""){
        alert("Введите кол-во ваших денег");
        return result.textContent = "Ошибка";
    }
    result.textContent = `${functresult(fromValue.value, toValue.value)}`
});

const functresult = (from, to) => {
   switch(from + "->" + to) {
    case "rub->dol" : return inputNum.value / 81.9103;
    case "dol->rub" : return inputNum.value * 81.9103;
    case "rub->evr" : return inputNum.value / 93.1557;
    case "evr->rub" : return inputNum.value * 93.1557;
    case "rub->uan" : return inputNum.value / 11.8865;
    case "uan->rub" : return inputNum.value * 11.8865;
    case "dol->evr" : return (inputNum.value * 81.9103) / 93.1557;
    case "dol->uan" : return (inputNum.value * 81.9103) / 11.8865;
    case "evr->dol" : return (inputNum.value * 93.1557) / 93.1557;
    case "evr->uan" : return (inputNum.value * 93.1557) / 11.8865;
    case "uan->dol" : return (inputNum.value * 11.8865) / 93.1557;
    case "uan->evr" : return (inputNum.value * 11.8865) / 11.886511
   }
}