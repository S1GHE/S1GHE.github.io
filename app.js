const telegramAPI = window.Telegram.WebApp;
telegramAPI.expand();

telegramAPI.MainButton.textColor = '#FFFFFF'
telegramAPI.MainButton.color = '#198754'

let array_value = []

function valudate_from() {
    if (document.getElementById('document1').value != '') {
        array_value.push(document.getElementById('document1').value)
    }
    return false;
}

telegramAPI.MainButton.setText('Отправить');
telegramAPI.MainButton.show();

Telegram.WebApp.onEvent('mainButtonCliked', function () {
    telegramAPI.sendData(`${array_value}`);
});