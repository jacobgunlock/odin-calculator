const nums = document.getElementsByClassName('num');
const operators = document.getElementsByClassName('operator');
const input = document.querySelector('.input');
const output = document.querySelector('.output');
const clearBtn = document.querySelector('.clear')
const delBtn = document.querySelector('.del');
const equalBtn = document.querySelector('.equal');
const negativeBtn = document.querySelector('.negative');
let a;
let b;
let operateSign;
let answer;

Array.from(nums).forEach(num => {
    num.addEventListener('click', () => {
        const value = num.innerHTML;
        if (output.innerHTML === '') {
            input.innerHTML += value;
            a = parseInt(input.innerHTML);
            console.log('a',a);
        } else {
            input.innerHTML += value;
            b = parseInt(input.innerHTML);
            console.log('b', b);
        }
    });    
});

Array.from(operators).forEach(operator => {
    operator.addEventListener('click', () => {
        if (output.innerHTML === '') {
            operateSign = operator.innerHTML;
            console.log('operator',operateSign);
            output.innerHTML = input.innerHTML + " " + operateSign;
            input.innerHTML = '';
        } else {
            operate(a, b, operateSign);
            operateSign = operator.innerHTML;
            output.innerHTML = answer + ' ' + operateSign;
            a = answer;
        }
    });
});

clearBtn.addEventListener('click', () => {
    input.innerHTML = '';
    output.innerHTML = '';
    a = 0;
    b = 0;
});

delBtn.addEventListener('click', () => {
    input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length-1);
    if (output.innerHTML === '') {
        a = parseInt(input.innerHTML);
    } b = parseInt(input.innerHTML);
});

equalBtn.addEventListener('click', () => {
    operate(a,b,operateSign);
    console.log('answer', answer);
    output.innerHTML = answer;
    operateSign = undefined;
});

negativeBtn.addEventListener('click', () => {
    if (input.innerHTML === '') return;

    if (!(input.innerHTML).includes('-')) {
        input.innerHTML = '-'+input.innerHTML;
        if (output.innerHTML != '') {
            b = parseInt(input.innerHTML);
            console.log('neg b', b)
        } else {
            a = parseInt(input.innerHTML);
            console.log('neg a', a);
        }
    } else {
        input.innerHTML = input.innerHTML.slice(1, input.innerHTML.length);

        if (output.innerHTML != '') {
        b = parseInt(input.innerHTML);
        console.log('pos b', b)
        } else {
        a = parseInt(input.innerHTML)
        console.log('pos a', a);
        }
    };
});
    
function operate (a, b, operateSign) {
    if (operateSign == undefined) return;
    switch (operateSign){
        case ('+'):  
            answer = a + b;
            output.innerHTML = answer;
            input.innerHTML = '';
            return answer;
        case ('-'):
            answer = a - b;
            output.innerHTML = answer;
            input.innerHTML = '';
            return answer;
        case ('*'):
            answer = a * b;
            output.innerHTML = answer;
            input.innerHTML = '';
            return answer;
        case ('/'):
            answer = a / b;
            output.innerHTML = answer;
            input.innerHTML = '';
            return answer;
        case ('%'):
            answer = a % b;
            output.innerHTML = answer;
            input.innerHTML = '';
            return answer;
    };
};




