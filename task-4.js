//GOIT javascript homework 02 task 4
'use strict';

const formatString = function (string) {
  if (string.length > 40) {
    const myArray = Array.from(string);
    myArray.splice(37, myArray.length - 37, '...');
    string = myArray.join('');
  }
  return string;
};

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// вернется форматированная строка
