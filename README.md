# Code-RGB-to-Hex-Conversion

Решение задачи по созданию функции для конвертации значений из формата RGB в Hex.
### Данные на входе
- три числа в формате СС с основанием 10
### Данные на выходе
- строка длины равной 6
### Функциональность
- проверка входных данных на вхождение в диапазон от 0 до 255
- установка минимального или максимального значения, если число выходит за рамки диапазона
- рекурсивное деление числа на 16, для получения кода эквивалентному формату в hex
- перевод цифр полученного кода в формат hex
- формат цифр кода путем добавления 0 к цифре при длине равной 1
