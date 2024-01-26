let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.setText('Покормить моржика рыбкой');
tg.MainButton.show();

let korm = document.getElementById('korm');

korm.addEventListener('click', (event) => {
    document.getElementById('img').src = 'wrs2.png';


});

tg.MainButton.onClick(() => {
    document.getElementById('img').src = 'wrs2.png';

})