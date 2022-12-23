const telegramAPI = window.Telegram.WebApp;
telegramAPI.expand();


telegramAPI.MainButton.textColor = '#FFFFFF';
telegramAPI.MainButton.color = '#198754';


function validate_from() {
    if (document.getElementById('document1').value != '') {
        array_value.push(document.getElementById('document1').value);
    }
    return false;
}

telegramAPI.MainButton.setText('Отправить');
telegramAPI.MainButton.show();

Telegram.WebApp.onEvent('mainButtonClicked', function () {
    telegramAPI.sendData(array_value);
});