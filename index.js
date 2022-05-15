//task1
const showMessage = function (name) {
const greetingWord = name.toLowerCase() === 'Mark' ? 'Hi' : 'Hello';
return `${greetingWord}, ${name}!`
};
console.log(showMessage(prompt('Введите имя'))); 

//task2
let numberOne = Number(prompt('Введите сторону треугольника!'));
let numberTwo = Number(prompt('Введите сторону треугольника!'));
console.log(`Длинна гипотенузы: ${Math.pow((Math.pow(numberOne, 2) + Math.pow(numberTwo, 2)), 1 / 2)}`); 

//task3
const getMinResult = function (a, b) {
return a < b ? a : b;
};
console.log(getMinResult(prompt('Введите первое число!'), prompt('Введите второе число!'))); 

//task 4
const getResult = function (number) {
return number % 2 === 0 ? true : false;
};
console.log(getResult(prompt('Введите число!'))); 

//task5
const deleteChars = function (str) {
return `${str.slice(1, -1)}`;
};
console.log(deleteChars(prompt('Введите строку!'))); */

//task6
const newString = function (str) {
return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
};
console.log(newString(prompt('Введите строку!'))); 

//task7
const showMassage = function (letter) {
return letter === letter.toUpperCase() ? 'Оууу май, большая буква!' : 'Нет уж, маленькие буквы - скучно';
};
console.log(showMassage(prompt('Введите букву!'))); 

//task8
let stringOne = String(prompt('Введит первую строку!'));
let stringTwo = String(prompt('Введите вторую строку!'));
console.log(`${stringOne} ${stringTwo}`); 


//task9
const getResult = function (string, number) {
return string.length > number ? 'String is too long!' : string;
};
console.log(getResult(prompt('Введите строку!'), prompt('Введите число!')));  

























