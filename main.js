"use strict";

/* 

данные на входе: три числа
данные на выходе: строка

псевдокод:
проверить входящие числа на минимальное и максимальное значения
если значение меньше минимального, то изменить на ноль
если значение больше максимального, то изменить на 255
создать буфер
для каждого из чисел выполнить:
разделить число на 16
если целая часть от деления равна нулю, то записать в буфер это число
иначе записать в буфер остаток от деления и разделить целую часть на 16
развернуть буфер
заменить числа от 10 до 15 на A - F
привести к строке

*/

const rgb = (...arr) => {

  const setMinMax = (num) => {
    if (num < 0) return 0;
    if (num > 255) return 255;
    return num;
  };

  const convertToHex = (num) => {
    if (Math.floor(num / 16) === 0) {
      stack.push(num);
    } else {
      stack.push(Math.floor(num % 16));
      convertToHex(Math.floor(num / 16))
    }
  };


  const stack = []
  console.log(convertToHex(62))
  console.log(stack)
  const numbers = arr.map( el => {

    setMinMax(el) 
    convertToHex(el)

  })

};

rgb(154, 15, 177);

// console.log(Math.floor(5 / 16) === 0)