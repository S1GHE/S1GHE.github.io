let telegramAPI = window.Telegram.WebApp;

telegramAPI.expand();

let name_user = document.getElementById("name");
name_user.innerText = `${telegramAPI.initDataUnsafe.user.first_name}`;


function valudate_from(){
    let valid_input = [
        document.getElementById('1').value,
        document.getElementById('2').value,
        document.getElementById('3').value,
        document.getElementById('4').value,
        document.getElementById('5').value
    ];
    console.log(valid_input);
    // for(i=1; i++; i >= 12){
    //     let valid_input = document.getElementById(`${i}`).value;
    //     console.log(valid_input);
    // }
    return false;
}