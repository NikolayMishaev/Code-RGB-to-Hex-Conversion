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
  return arr
    .map((el) => {
      let stack = [];

      const setMinMax = (num) => {
        if (num < 0) return 0;
        if (num > 255) return 255;
        return num;
      };

      const convertToHex = (num) => {
        if (Math.floor(num / 16) === 0) {
          stack.push(num);
        } else {
          stack.push(num % 16);
          convertToHex(Math.floor(num / 16));
        }
      };

      const pattern = {
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F",
      };

      setMinMax(el);
      convertToHex(el);

      stack = stack.reverse().map((el) => {
        return pattern[el] ? pattern[el] : el;
      });

      return stack.join("");
    })
    .join("");
};

console.log(rgb(32, 62, 79));

// console.log(Math.floor(5 / 16) === 0)
