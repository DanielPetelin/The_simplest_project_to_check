// создадим функцию при нажатии на кнопку.
document.getElementById('count').onclick = function() {
    var myOtver = document.getElementById('num').value; // создадим переменную со значением нашего ответа в инпуте.
    var otvet = 100000; // создадим переменную с правильным ответом.

    if (myOtver == otvet) {
        document.getElementById('out').innerHTML = 'Правильно!';
    } else {
        document.getElementById('out').innerHTML = 'Ответ неверный! Правильный ответ: ' + otvet;
    };
};

// спасибо за просмотр. Подпишись. ^_-.