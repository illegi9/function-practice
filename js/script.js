'use strict'

// Создаю функцию которая вычитает год рождения и выводит результат на экран

document.querySelector('.main--bl-1--btn').addEventListener('click', 
function () {
    
    let date = new Date();
    let year = date.getFullYear();
    // Задал переменные которые показывают текущий год

    let result = document.querySelector('.main--bl1--input').value;
    let wrongResult = document.querySelector('.main--bl-1--out-1');

    if(isNaN(result)) return wrongResult.innerHTML = 'Вы ввели не число, введите число';
    if(result <= 0 || result > 150) return wrongResult.innerHTML = 'Неправильная дата';
    // В if я сделал возвраты если юзер введет не число или число меньшее или равное 0

    document.querySelector('.main--bl-1--out-1').innerHTML = year - result;

    document.querySelector('.main--bl-1--btn-clear').addEventListener('click', 
    function () {
    document.querySelector('.main--bl-1--out-1').textContent = '';
    document.querySelector('.main--bl1--input').value = '';
     });
     // Тут я сделал кнопку которая очищает поле ввода и результат
});

// Конец функции которая вычитает год рождения и выводит результат на экран