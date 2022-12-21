// prendo gli elementi dal dom
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


// Stampo in console l'orario attuale
const logTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes() < 10 ? '0' + now.getMinutes(): now.getMinutes();
    const seconds = now.getSeconds() < 10 ? '0' + now.getSeconds(): now.getSeconds();

    const currentTime = `${hours}:${minutes}:${seconds}`;

    console.log(currentTime);
}

logTime();

// variabile per il countdown
const countDownDate = new Date('Dec 25, 2022 00:00:00').getTime();
console.log(countDownDate);

// creo il countdown


