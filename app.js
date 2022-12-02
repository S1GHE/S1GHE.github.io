let telegramAPI = window.Telegram.WebApp;

telegramAPI.expand();

let name_user = document.getElementById("name");
name_user.innerText = `${telegramAPI.initDataUnsafe.user.first_name}`;


function valudate_from(){
    let document1 = document.getElementById("document1").value;

    if(document1 != ""){

    }else{

    }

    return false;
}