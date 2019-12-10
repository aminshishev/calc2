let scr = document.querySelector('#scrdiv2');
let litscr = document.querySelector("#scrdiv");
const countDecimals = function(value) {
    if (Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0;
}
const operate = function(a, oper, b) {

    if (oper == '+') {
        res = (Number(a) + Number(b));
    } else if (oper == '-') {
        res = (Number(a) - Number(b));
    } else if (oper == '^') {
        res = (a ** b);
    } else if (oper == '*') {
        res = (Number(a) * Number(b))
    } else if (oper == '/') {
        if (b == 0) {
            return 'ERROR';
        } else { res = (a / b); }
    }


    if (countDecimals(res) > 5) {
        return parseFloat(res).toFixed(5);
    }
    return res;
}
numbers = [];
let operator = [];
let nums = document.querySelectorAll(".numbers");
nums.forEach(elem => elem.addEventListener('click', function() {
    if (scr.textContent == numbers[0]) {
        scr.textContent = elem.textContent;
    } else if (scr.textContent != numbers[0]) {
        scr.textContent += elem.textContent;

    }

}))
document.querySelector('#a').addEventListener('click', function() {
    let lst = scr.textContent.split('');
    let lst2 = lst.filter(function(num) {
        return num == '.' ? true : false;
    })
    if (lst2.length > 0) {
        return;
    }
    scr.textContent += document.querySelector('#a').textContent;
})
let opeators = document.querySelectorAll('#divide, #multiply, #multiply2, #substract, #add');
opeators.forEach(elem => elem.addEventListener('click', function go()

    {
        numbers.push(Number(scr.textContent));
        operator.push(elem.textContent);



        if (numbers.length >= 2) {

            numbers[0] = operate(numbers[0], operator[0], scr.textContent);


            numbers.splice(1, 2);
            operator.shift();

            litscr.textContent = numbers[0];


        } else {

            numbers[0] = Number(scr.textContent);
            litscr.textContent = numbers[0];
            litscr.textContent += elem.textContent;




        };
        scr.textContent = '';


    }))
document.querySelector('#back').addEventListener('click', function() {

    scr.textContent = scr.textContent.substring(0, scr.textContent.length - 1);

})







document.querySelector('#equals').addEventListener('click', function() {

    numbers[0] = operate(numbers[0], operator[0], scr.textContent);
    litscr.textContent = numbers[0];
    scr.textContent = '';
    //frst = '';
    //scnd = '';

})
document.querySelector('#del').addEventListener('click', function() {
    numbers = [];
    operator = [];
    scr.textContent = '';
    litscr.textContent = '';
})
document.addEventListener("keypress", function(e) {
    let keycode = e.keyCode;
    let valueEntered = String.fromCharCode(keycode);
    console.log(valueEntered);

    if (valueEntered == "1") document.getElementById("1").click();
    if (valueEntered == "2") document.getElementById("2").click();
    if (valueEntered == "3") document.getElementById("3").click();
    if (valueEntered == "4") document.getElementById("4").click();
    if (valueEntered == "5") document.getElementById("5").click();
    if (valueEntered == "6") document.getElementById("6").click();
    if (valueEntered == "7") document.getElementById("7").click();
    if (valueEntered == "8") document.getElementById("8").click();
    if (valueEntered == "9") document.getElementById("9").click();
    if (valueEntered == "0") document.getElementById("0").click();
    if (valueEntered == "+") document.getElementById("add").click();
    if (valueEntered == "-") document.getElementById("substract").click();
    if (valueEntered == "*") document.getElementById("multiply").click();
    if (valueEntered == "/") document.getElementById("divide").click();
    if (valueEntered == "^") document.getElementById("multiply2").click();
    if (valueEntered == ".") document.getElementById("a").click();
    if (keycode == "13") document.getElementById("equals").click();
    if (keycode == '127') document.getElementById('del').click();
    if (keycode == '96') document.getElementById('back').click();


})
window.addEventListener('keypress', function(e) {
    console.log(e.keyCode);
})