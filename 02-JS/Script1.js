//1
let a =5;
let b = 10;
let summa = 0;
while (a <= b) {
    summa += a;
    a++;
}
alert(`сумма чисед от 5 до 10 равна ${summa}`)

//2
let num1 = 30,
    num2 = 18;
while (num1 != 0 & num2 != 0) {
    if (num1 > num2) {
        num1 = num1 % num2;
    } else {
        num2 = num2 % num1;
    }
}
alert(`нод чисел 30 и 18 равен ${num1 + num2}`);

//3
let number = 15;
let i = 1;
while (i <= number / 2){
    if (number % i == 0){
        alert(i, konec=" ")
    }
    i+=1
}
alert(number)
//4
let ee = 10;
alert(`количество цифр в число 10: ${String(ee).length}`)

//5
let n = 0;
let positive_number = 0;
let negative_number = 0;
let null_number = 0;
let even_number = 0;
let odd_number = 0;
for (let i = 0; i < 10; i++) {
    n = +prompt("Введите число: ");
    if (n > 0) {
        positive_number += 1;
    } else if (n < 0) {
        negative_number += 1;
    } else {
        null_number += 1;
    }
    !(n % 2) ? (even_number += 1) : (odd_number += 1);
}
alert(`Из 10 чисел ${positive_number} положительных, ${negative_number} отрицательных, ${null_number} равных нулю, ${even_number} четных и ${odd_number} нечетных.`);
//6
let numberA = 0;
let numberB = 0;
let result = true;
let action_sign = "";
do {
    numberA = +prompt("Введите первое число: ");
    numberB = +prompt("Введите второе число: ");
    action_sign = prompt("Введите знак операции (*, /, + либо -): ");
    switch (action_sign) {
        case "+":
            alert(`${numberA} ${action_sign} ${numberB} = ${numberA + numberB}`);
            break;
        case "-":
            alert(`${numberA} ${action_sign} ${numberB} = ${numberA - numberB}`);
            break;
        case "*":
            alert(`${numberA} ${action_sign} ${numberB} = ${numberA * numberB}`);
            break;
        case "/":
            alert(`${numberA} ${action_sign} ${numberB} = ${numberA / numberB}`);
            break;
        default:
            alert(`Вы не ввели знак математической операции!`);
            break;
    }
    result = confirm("Хотите выполнить еще одну математическую операцию?");
} while (result == true);

//7
let str = prompt("Введите число!");
let k = prompt("На сколько цифр его сдвинуть?");

alert(str.slice(k) + str.slice(0, k));

//8
let arr_Week = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
];
let s = 0;
let stop = true;
while (stop == true) {
    stop = confirm(`${arr_Week[s]}. Хотите увидеть следующий день недели?`);
    s++;
    if (s > 6) {
        s = 0;
    }
}
alert("Вывод дней недели окончен!");
//9
let table = "";
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        table += `${i} x ${j} = ` + i * j + ", ";
    }
}
alert(table);
//10
let q = 0;
do {
    q = Math.trunc(
        +prompt("Введите целое число в диапазоне от 0 до 100 включительно: ")
    );
} while (q < 0 || q > 100);
alert(`Итак, будем играться с числом ${q}.`);

let counter = 0; // счётчик попыток угадать число
let low = 0; // нижняя граница диапазона разбиения
let middle = 0; // середина разбиения диапазона
let high = 100; // верхняя граница разбиения диапазона
let condition = ""; // отклик пользователя =, <, > на предложенный вариант числа, пока что просто пустая строка

while (low <= high) {
    middle = Math.trunc((low + high) / 2);
    condition = prompt(
        `Вы загадали число ${middle}? Введите без кавычек "=", если это так. В противном случае, если искомое число меньше, введите "<", либо же ">", если оно больше. Опять же, без кавычек.`
    );
    // это был отклик пользователя

    if (condition != "=" && condition != "<" && condition != ">") {
        alert(
            "Вы вводите посторонние символы, я вас не понимаю! Будьте внимательнее!"
        );
        continue;
        // здесь исключаем ввод опечаток
    }
    if (
        (condition != "=" && middle == q) ||
        (condition == "<" && middle < q) ||
        (condition == ">" && middle > q) ||
        (condition == "=" && middle != q)
    ) {
        alert(
            `Кто-то мухлюет! Знак "${condition}" здесь совсем неуместен! Попробуйте снова!`
        );
        continue;
    } // здесь исключаем ложь в ответах
    if (condition == ">") {
        low = middle + 1;
    } else if (condition == "<") {
        high = middle - 1;
    } else {
        low = high + 1;
    }
    counter++;
}
alert(
    `Итак, за ${counter} попыток бинарным поиском мы установили, что вы загадали число ${middle}!`
);