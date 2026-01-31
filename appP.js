let equal_pressed = 0;
let button_input = document.querySelectorAll('.input-button');
let input = document.getElementById('input');
let equal = document.getElementById('equal');
let erase = document.getElementById('erase');
let percent = document.getElementById('percent');
let scientificFunctionClicked = false;

window.onload = () => {
    input.value = '';
};

button_input.forEach((button_class) => {
    button_class.addEventListener('click' , () => {
        if (equal_pressed === 1){
            input.value = '';
            equal_pressed = 0;
        }
        input.value += button_class.value;
    });
});

percent.addEventListener('click' , () => {
    let expr = input.value.trim();
    const match = expr.match(/(-?\d*\.?\d+)$/);

    if(match){
        const numStr = match[0];
        const num = parseFloat(numStr);
        const percentValue = num /100;

        input.value = expr.slice(0 , match.index) + percentValue;
    }else{
        input.value = expr + '0';
    }
});

