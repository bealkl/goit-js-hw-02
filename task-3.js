//GOIT javascript homework 02 task 3
'use strict';

const findLongestWord = function (string) {
  const myArray = string.split(' ');
  let longestWord = myArray[0];

  for (const element of myArray) {
    if (element.length > longestWord.length) longestWord = element;
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
