const telegramAPI = window.Telegram.WebApp;
telegramAPI.expand();


function valudate_from() {
    if (document.getElementById('document1').value != '') {
        Telegram.WebApp.onEvent('mainButtonCliked', function () {
            telegramAPI.sendData(`${document.getElementById('document1').value}`)
        })

        return true;
    }
    return false;
}