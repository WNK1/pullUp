/*
Задание #3

Необходимо написать программу, в которой нужно определить переменные (указать для них свои значения):

productName — название товара.
productPrice — стоимость.
productQuantity — количество купленного товара.
resultCost — итоговая стоимость (высчитать динамически, с учетом цены и количества товара).
Выведите в консоль строку, в которой на месте фигурных скобок будут соответствующие значения переменных:

“Вы купили {productName} ({productQuantity} шт.) по {productPrice} ₽. Всего было потрачено: {resultCost} ₽”.*/

let productName = "Бананы";
let productPrice = 50;
let productQuantity = 121;
let resultCost = +productPrice * +productQuantity;
console.log(
  `Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} ₽. Всего было потрачено с учетом колличества купленных товаров : ${resultCost} ₽”.`
);

//===========================================================================================================
// Задание #6

// Создайте переменную a и b, присвойте им любые числа. Если a больше b, выведите в консоль true, иначе — false.

// P. S. Нельзя использовать if...else и тернарный оператор.

const a = 2;
const b = 5;
const op = (a, b) => console.log(+(a > b) ? true : false);
op(a, b); // обязательно передвать переменные что бы они правильно приняли значение true

//===========================================================================================================
// Задание #1
// Создайте переменную a, присвоив в нее любое число.
// Если значение переменной четное, выведите в консоль “Четное”.
// Если значение переменной нечетное:
// Выведите обновленное значение a.
// Прибавьте к a + 1.
// выведите в консоль “Нечетное”.

const twoA = 3;

function showResultWhatNumerType(number) {
  if (number % 2 === 0) {
    console.log("Четное");
  } else {
    console.log(`${twoA}+` + 1 + "=" + ++number);
    console.log("Нечетное");
  }
}
showResultWhatNumerType(twoA);

//===========================================================================================================
// Задание #2
// Напишите программу, которая последовательно выводит числа в диапазоне [0, 1000], удовлетворяющие одному из условий:
// Число нечетное.
// Число кратно 12.

function massItervalNumber(min, max) {
  const massiv = [];
  for (i = min; i <= max; i++) {
    if (i % 2 !== 0 || i % 12 === 0) {
      massiv.push(i);
    }
  }
  return massiv;
}
const mas = massItervalNumber(0, 1000);
console.log(mas);

//massItervalNumber(0, 1000);
// let mass = [];
// mass == massItervalNumber;
// console.log(...mass);
///////////////////////////////=========================== НЕПРАВИЛЬНЫЕ РЕШЕНИЯ
// const mas = [];
// mas.push(massItervalNumber(0, 1000));
// console.log(mas);

//===========================================================================================================
// Задание #3
// Создайте массив со значениями [1, 10, 15, -100, -23, 19, 15032].
// Получите из него новый массив, в котором каждый элемент будет увеличен на 25%.
// Выведите оба массива в консоль.

const zadanie = [1, 10, 15, -100, -23, 19, 15032];
const newMap = zadanie.map((num) => num * 1.25);
console.log(`изначальный массив`, zadanie);
console.log(newMap);

//===========================================================================================================

// Задание #4
// Создайте функцию, объявленную с помощью ключевого слова function,
// с именем sayHello(). Она принимает в параметры name и возвращает строку вида: "Hello, {name}!".
// Если функция была вызвана без указания name, то выведите строку "Hello, someone!".
// Закомментируйте функцию и напишите аналогичную, но в виде стрелочной функции.

// function sayHello(name) {
//   console.log(`Hello ${(name ??= "someone")}`);
// }
// sayHello();

// sayHello = (names) => {
//   console.log(`Hello ${(names ??= "someone")}`);
// };

// sayHello("уеба");

// Задание #5

// Напишите функцию calc(), которая принимает в параметры a и b, а также operation. В зависимости от переданной операции (+, -, /, *) возвращаем необходимый результат выражения с числами.

// function calc(a, b, operation) {
//   // Ваш код здесь...
// }

// console.log(calc(1, 2, '+')); // 3
// console.log(calc(1, 2, '-')); // -1
// console.log(calc(2, 2, '*')); // 4
// console.log(calc(4, 2, '/')); // 2

function calc(a, b, operation) {
  if (operation === "+") {
    return +(a + b);
  } else if (operation === "-") {
    return +(a - b);
  } else if (operation === "*") {
    return +(a * b);
  } else if (operation === "/") {
    return +(a / b);
  } else {
    console.log(
      "извините выбран непредвиденный опретор матиматического действия"
    );
  }
} //////////===================================  так же возможно написать данную функцию с помощью switch case

console.log(calc(1, 2, "+")); // 3
console.log(calc(1, 2, "-")); // -1
console.log(calc(2, 2, "*")); // 4
console.log(calc(4, 2, "/")); // 2

// Задание #6
// Создайте переменную age, присвоив ей числовое значение.
// Создайте переменную category, присвоив ей с помощью тернарного оператора значение:
// "Взрослый" — если age больше или равно 18.
// "Детский" — если age меньше 18.
// Выведите переменные в консоль.

let age = 20;

console.log(age >= 18 ? "взрослый" : "детский ");
