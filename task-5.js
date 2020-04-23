//GOIT javascript homework 02 task 5
'use strict';

const checkForSpam = function (message) {
  const myString = message.toLowerCase();
  if (myString.includes('spam') || myString.includes('sale')) return true;
  return false;
};

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
