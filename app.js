let telegramAPI = window.Telegram.WebApp;

telegramAPI.expand();

let name_user = document.getElementById("name");
name_user.innerText = `${telegramAPI.initDataUnsafe.user.first_name}`;


function valudate_from(){
    let document1 = document.getElementById("document1").value;
    let document2 = document.getElementById("document2").value;
    let document3 = document.getElementById("document3").value;
    let document4 = document.getElementById("document4").value;
    let document5 = document.getElementById("document5").value;
    let document6 = document.getElementById("document6").value;
    let document7 = document.getElementById("document7").value;
    let document8 = document.getElementById("document8").value;
    let document9 = document.getElementById("document9").value;
    let document10 = document.getElementById("document10").value;
    let document11 = document.getElementById("document11").value;

    if(document1 == ""){
        return false;
    }

    if (document2 ==""){
        return false;
    }

    if (document3 == ""){
        return false
    }


    return true;
}