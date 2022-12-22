let telegramAPI = window.Telegram.WebApp;

telegramAPI.expand();


function valudate_from() {
    if (document.getElementById('document1').value != '') {
        document.getElementById('document1-s').style.display = 'block';
        telegramAPI.MainButton.setText('вы выбрали первый документ')
        telegramAPI.MainButton.show();
        Telegram.WebApp.onEvent('mainButtonCliked', function () {
            telegramAPI.sendData(`${document.getElementById('document1').value}`)
        })
        telegramAPI.sendData(`${document.getElementById('document1').value}
        ${document.getElementById('document1').value}`)
        if (document.getElementById('document2').value == '') {
            document.getElementById('document2-s').style.display = 'block';
            if (document.getElementById('document3').value == '') {
                document.getElementById('document3-s').style.display = 'block';
                if (document.getElementById('document4').value == '') {
                    document.getElementById('document4-s').style.display = 'block';
                    if (document.getElementById('document5').value == '') {
                        document.getElementById('document5-s').style.display = 'block';
                        if (document.getElementById('document6').value == '') {
                            document.getElementById('document6-s').style.display = 'block';
                            if (document.getElementById('document7').value == '') {
                                document.getElementById('document7-s').style.display = 'block';
                                if (document.getElementById('document8').value == '') {
                                    document.getElementById('document8-s').style.display = 'block';
                                    if (document.getElementById('document9').value == '') {
                                        document.getElementById('document9-s').style.display = 'block';
                                        if (document.getElementById('document10').value == '') {
                                            document.getElementById('document10-s').style.display = 'block';
                                            if (document.getElementById('document11').value == '') {
                                                document.getElementById('document11-s').style.display = 'block';
                                            } else {
                                                return true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}