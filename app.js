let telegramAPI = window.Telegram.WebApp;

telegramAPI.expand();


function valudate_from() {
    if (document.getElementById('document1').value != '') {
        document.getElementById('document1-s').style.display = 'block';

        Telegram.WebApp.onEvent('mainButtonCliked', function () {
            telegramAPI.sendData(`${document.getElementById('document1').value}`)
        })
    }
    return false;
}