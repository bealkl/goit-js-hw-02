//GOIT javascript homework 02 task 6
'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Enter the number. Click "Cancel" to complete.');
  if (input === null) continue;

  input = Number(input);
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  numbers.push(input);
} while (input !== null);

for (const element of numbers) total += element;
console.log(`Общая сумма чисел равна ${total}`);
