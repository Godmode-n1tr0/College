const btn = document.querySelector('.btn');

const toValue = document.querySelector('#to_value');
const fromValue = document.querySelector('#from_value');

const inputNum = document.querySelector('.text');

const result = document.querySelector('.result');

btn.addEventListener('click', () => {
    result.textContent = `${functresult(fromValue.value, toValue.value)}`
});

const functresult = (from, to) => {
   switch(from + "->" + to) {
    case "m->in" : return inputNum.value / 0.0254;
    case "in->m" : return inputNum.value * 0.0254;
    case "m->yd" : return inputNum.value / 0.9144;
    case "yd->m" : return inputNum.value * 0.9144;
    case "m->ft" : return inputNum.value / 0,3048;
    case "ft->m" : return inputNum.value * 0,3048;
    case "in->ft" : return inputNum.value / 0.3048;
    case "in->yd" : return inputNum.value / 0.9144;
    case "ft->in" : return inputNum.value / 0.0254;
    case "ft->yd" : return inputNum.value / 0.9144;
    case "yd->in" : return inputNum.value / 0.0254;
    case "yd->ft" : return inputNum.value / 0.3048;
   } 
};