const telegramAPI = window.Telegram.WebApp;
telegramAPI.expand();

telegramAPI.MainButton.hide();
telegramAPI.MainButton.textColor = '#FFFFFF';
telegramAPI.MainButton.color = '#198754';


let dict_doc = []

function validate_from() {
    if (document.getElementById('document1').value == '')
        document.getElementById('document1-s').style.display = 'block';
    else
        dict_doc[0] = document.getElementById('document1').value;

    if (document.getElementById('document2').value == '')
        document.getElementById('document2-s').style.display = 'block';
    else
        dict_doc[1] = document.getElementById('document2').value;

    if (document.getElementById('document3').value == '')
        document.getElementById('document3-s').style.display = 'block';
    else
        dict_doc[2] = document.getElementById('document3').value;

    if (document.getElementById('document4').value == '')
        document.getElementById('document4-s').style.display = 'block';
    else
        dict_doc[3] = document.getElementById('document4').value;

    telegramAPI.MainButton.setText('Отправить');
    telegramAPI.MainButton.show();

    return false;
}

// function validate_from() {
//     for(var x = 1; x<=11; x++){
//         if (document.getElementById('document' + x).value == '')
//             document.getElementById('document' + x + '-s').style.display = 'block';
//         else
//             dict_doc[x-1] = document.getElementById('document' + x).value;
//     }
//     if (dict_doc.length === 11){
//         telegramAPI.MainButton.setText('Отправить');
//         telegramAPI.MainButton.show();
//
//     }
//     return false;
// }

Telegram.WebApp.onEvent('mainButtonClicked', function () {
    telegramAPI.sendData(`${dict_doc},`);
});