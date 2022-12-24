const telegramAPI = window.Telegram.WebApp;
telegramAPI.expand();

telegramAPI.MainButton.hide();
telegramAPI.MainButton.textColor = '#FFFFFF';
telegramAPI.MainButton.color = '#198754';


let dict_doc = []

function validate_from() {
    if (document.getElementById('document1').value == '') {
        document.getElementById('document1-s').style.display = 'block';
    } else {
        dict_doc[0] = document.getElementById('document1').value;
        telegramAPI.MainButton.setText('Отправить');
        telegramAPI.MainButton.show();
    }
    return false;
}

Telegram.WebApp.onEvent('mainButtonClicked', function () {
    telegramAPI.sendData(`${dict_doc},`);
});