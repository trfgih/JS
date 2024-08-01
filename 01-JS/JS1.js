'use strict';

/* eslint-disable no-magic-numbers */
/* eslint-disable prefer-const */

//1
let
    name = prompt("ваше имя", "дима");
alert("привет,"+name)


// 2 
let
    birthYear = +prompt('Введите год рождения', 2006);
alert('Ваш возраст = ' + age(birthYear));

// 3 
alert('Периметр квадрата = ' + squarePerimeter(+prompt('Введите длину стороны квадрата', 19)));

// 4
let
    radius = +prompt('Введите радиус окружности', 5),
    message = 'Площадь такой окружности = ' + circleArea(radius);
alert(message);

// 5
let
    distance = +prompt('Введите расстояние в км между двумя городами', 400),
    time = +prompt('За сколько часов желаете добраться?', 5);
alert('Средняя скорость, с которой необходимо двигаться ' + travelVelocity(distance, time) + ' км/ч');

// 6 
const
    from = 'USD',
    out = 'EUR',
    exchangeRate = 1.03,
    usd = +prompt(`Конвертор валют. Введите сумму в валюте ${from}`, 15);
alert(`По курсу ${exchangeRate}, сумма составит ${currencyExchange(usd, exchangeRate)} ${out}`);

// 7
const
    fileSize = 820;
let
    volume = +prompt('Введите объем флешки в Гб', 5),
    files = integerDivision(1024 * volume, fileSize);
message = `На такую флешку помещается ${files} файлов размером в ${fileSize} Мб `;
alert(message);

// 8
let
    money = +prompt('Введите сумму денег в кошельке', 500),
    price = +prompt('Введите цену одной шоколадки', 69),
    chocolates = integerDivision(money, price),
    cashback = money - chocolates * price;
alert(`Вы сможете купить ${chocolates} шоколадок, сдачи останется ${cashback}`);

// 9
let
    threeDigitNumber = +prompt('Введите трехзначное число', 654);
alert('Число задом наперед: ' + reverse3digitNumber(threeDigitNumber));

//10
const num = prompt("введите любое число");
num % 2 == 0 ? alert(`число ${num} четное`):alert(` число ${num} нечетное`)

// дальше объявления функций  
function age(birth) {
    return 2024 - birth;
}

function squarePerimeter(side) {
    return 4 * side;
}

function circleArea(radius) {
    return Math.PI * radius * radius;
}

function travelVelocity(distance, time) {
    return (distance / time).toFixed(2);
}

function integerDivision(a, b) {
    return Math.trunc(a / b);
}

function currencyExchange(money, rate) {
    return rate * money;
}

function reverse3digitNumber(num) {
    let
        digit3 = num % 10,
        digit2 = Math.trunc(num / 10) % 10,
        digit1 = Math.trunc(num / 100) % 10;
    return '' + digit3 + digit2 + digit1;
}