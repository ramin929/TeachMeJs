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

























