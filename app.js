let telegramAPI = window.Telegram.WebApp;

telegramAPI.expand();

let name_user = document.getElementById("name")
name_user.innerText = `${telegramAPI.initDataUnsafe.user.first_name}`