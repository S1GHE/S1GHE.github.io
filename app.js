const telegramAPI = window.Telegram.WebApp;
telegramAPI.expand();

telegramAPI.MainButton.hide();
telegramAPI.MainButton.textColor = '#FFFFFF';
telegramAPI.MainButton.color = '#198754';


let dict_doc = []

function validate_from() {
    let docs = document.getElementsByClassName('documents');
    let docs_howers = document.getElementsByClassName('documents-error');
    for(let i = 0; i < docs.length; i++){
        if(docs[i].value === '')
            docs_howers[i].style.display = 'block';
        else
            docs_howers[i].style.display = 'none';
        dict_doc[i] = docs[i].value;
    }

    for(let j = 0; j < dict_doc.length; j++){
        if (dict_doc[j] == '')
            return false;
    }
    telegramAPI.MainButton.setText('Отправить');
    telegramAPI.MainButton.show();
    return false;
}
Telegram.WebApp.onEvent('mainButtonClicked', function () {
    telegramAPI.sendData(`${dict_doc},`);
});