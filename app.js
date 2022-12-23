const telegramAPI = window.Telegram.WebApp;
telegramAPI.expand();

telegramAPI.MainButton.hide();
telegramAPI.MainButton.textColor = '#FFFFFF';
telegramAPI.MainButton.color = '#198754';


let dict_doc = {
    'document1': ''
}
console.log(dict_doc.document1)

function validate_from() {
    if (document.getElementById('document1').value != '') {
        dict_doc.document1 = document.getElementById('document1').value
        console.log(dict_doc.document1)
        console.log(dict_doc)
        alert(dict_doc.document1)
    }
    return false;
}

telegramAPI.MainButton.setText('Отправить');
telegramAPI.MainButton.show();

Telegram.WebApp.onEvent('mainButtonClicked', function () {
    alert(dict_doc.document1)
    telegramAPI.sendData(dict_doc);
});