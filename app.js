const telegramAPI = window.Telegram.WebApp;
telegramAPI.expand();


telegramAPI.MainButton.textColor = '#FFFFFF';
telegramAPI.MainButton.color = '#198754';

let dict_document = {
    'document1': ''
}

function validate_from() {
    if (document.getElementById('document1').value != '') {
        dict_document.document1 = document.getElementById('document1').value
    }
    return false;
}

telegramAPI.MainButton.setText('Отправить');
telegramAPI.MainButton.show();

Telegram.WebApp.onEvent('mainButtonClicked', function () {
    telegramAPI.sendData(dict_document);
});