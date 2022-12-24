const telegramAPI = window.Telegram.WebApp;
telegramAPI.expand();

telegramAPI.MainButton.hide();
telegramAPI.MainButton.textColor = '#FFFFFF';
telegramAPI.MainButton.color = '#198754';


let dict_doc = []

function validate_from() {
    var docs = document.getElementsByClassName('documents');
    var docs_howers = document.getElementsByClassName('documents-error');
    for(var i = 0; i < docs.length; i++){
        if(docs[i].value === '')
            docs_howers[i].style.display = 'block';
        else
            docs_howers[i].style.display = 'none';
        dict_doc[i] = docs[i].value;
    }
    telegramAPI.MainButton.setText('Отправить');
    telegramAPI.MainButton.show();
    return false;
}
Telegram.WebApp.onEvent('mainButtonClicked', function () {
    telegramAPI.sendData(`${dict_doc},`);
});