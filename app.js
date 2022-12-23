const telegramAPI = window.Telegram.WebApp;
telegramAPI.expand();

telegramAPI.MainButton.textColor = '#FFFFFF'
telegramAPI.MainButton.color = '#198754'

function valudate_from() {
    if (document.getElementById('document1').value != '') {
        telegramAPI.MainButton.setText('Отправить');
        telegramAPI.MainButton.show();

        Telegram.WebApp.onEvent('mainButtonCliked', function () {
            telegramAPI.sendData(`${document.getElementById('document1').value}`)
        })

    }
    return false;
}