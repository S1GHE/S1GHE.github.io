const telegramAPI = window.Telegram.WebApp;
telegramAPI.expand();

telegramAPI.MainButton.textColor = '#FFFFFF'
telegramAPI.MainButton.color = '#198754'

let array_value = []

if(telegramAPI.MainButton.isVisible){
    telegramAPI.MainButton.hide()
}

function valudate_from() {
    if (document.getElementById('document1').value != '') {
        array_value.push(document.getElementById('document1').value)
        console.log(array_value);
    }
    return false;
}

telegramAPI.MainButton.setText('Отправить');
telegramAPI.MainButton.show();

Telegram.WebApp.onEvent('mainButtonCliked', function () {
    alert('aaa')
    telegramAPI.sendData(array_value);
});