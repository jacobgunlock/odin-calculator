const nums = document.getElementsByClassName('num');
const operators = document.getElementsByClassName('operator');
const input = document.querySelector('.input');
const output = document.querySelector('.output');
const clearBtn = document.querySelector('.clear')
const delBtn = document.querySelector('.del');
const equalBtn = document.querySelector('.equal');
const negativeBtn = document.querySelector('.negative');
const decimalBtn = document.querySelector('.decimal');
let a;
let b;
let operateSign;
let answer;

Array.from(nums).forEach(num => {
    num.addEventListener('click', () => {
        const value = num.innerHTML;
        input.innerHTML += value;
        output.innerHTML === '' ? a=Number(input.innerHTML) : b=Number(input.innerHTML);
    });    
});

Array.from(operators).forEach(operator => {
    operator.addEventListener('click', () => {
        if (input.innerHTML == '' && output.innerHTML == '') return;
        if (output.innerHTML === '' ) {
            operateSign = operator.innerHTML;
            output.innerHTML = input.innerHTML + " " + operateSign;
            input.innerHTML = '';
        } else {
            operate(a, b, operateSign);
            if (a !== undefined && b !== undefined){
                if (isNaN(answer)) return;
                operateSign = operator.innerHTML;
                output.innerHTML = Math.round(answer*1000)/1000 + ' ' + operateSign;
                a = Math.round(answer*1000)/1000;
                b = undefined;
                console.log('here')
            } else {
                operateSign = operator.innerHTML;
                output.innerHTML = a + ' ' + operateSign;
            }
        }
    });
});

clearBtn.addEventListener('click', () => {
    input.innerHTML = '';
    output.innerHTML = '';
    a = undefined;
    b = undefined;
});

delBtn.addEventListener('click', () => {
    if (a == undefined || b == undefined) return;
    input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length-1);
    output.innerHTML === '' ? a=Number(input.innerHTML) : b=Number(input.innerHTML);
});

equalBtn.addEventListener('click', () => {
    if (a == undefined) return;
    b = Number(input.innerHTML);
    operate(a,b,operateSign);
    if (isNaN(answer)) {
        return;
    } else {
        output.innerHTML = Math.round(answer * 1000)/1000;
        operateSign = undefined;
    };
});

negativeBtn.addEventListener('click', () => {
    if (input.innerHTML === '') return;
    if (!(input.innerHTML).includes('-')) {
        input.innerHTML = '-'+input.innerHTML;
        output.innerHTML != '' ? b=Number(input.innerHTML) : a=Number(input.innerHTML);
    } else {
        input.innerHTML = input.innerHTML.slice(1, input.innerHTML.length);
        output.innerHTML != '' ? b=Number(input.innerHTML) : a=Number(input.innerHTML);
    };
});

decimalBtn.addEventListener('click', () => {
    if (input.innerHTML === '') return;
    if (!(input.innerHTML).includes('.')) {
        input.innerHTML = input.innerHTML + '.';
        output.innerHTML != '' ? b=Number(input.innerHTML) : a=Number(input.innerHTML);
    };
});
 
function operate (a, b, operateSign) {
    if (operateSign === undefined) return;
    if (a === undefined || b === undefined) return;
    switch (operateSign){
        case ('+'):  
            answer = a + b;
            input.innerHTML = '';
            return Math.round(answer*1000)/1000;
        case ('-'):
            answer = a - b;
            input.innerHTML = '';
            return Math.round(answer*1000)/1000;
        case ('*'):
            answer = a * b;
            input.innerHTML = '';
            return Math.round(answer*1000)/1000;
        case ('/'):
            answer = a / b;
            input.innerHTML = '';
            return Math.round(answer*1000)/1000;
        case ('%'):
            answer = a % b;
            input.innerHTML = '';
            return Math.round(answer*1000)/1000;
    };
};