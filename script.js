// prendo gli elementi dal dom
const daysCounter = document.getElementById('days');
const hoursCounter = document.getElementById('hours');
const minutesCounter = document.getElementById('minutes');
const secondsCounter = document.getElementById('seconds');


// // orario attuale
// const logTime = () => {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes() < 10 ? '0' + now.getMinutes(): now.getMinutes();
//     const seconds = now.getSeconds() < 10 ? '0' + now.getSeconds(): now.getSeconds();

//     const currentTime = `${hours}:${minutes}:${seconds}`;

//     console.log(currentTime);
// }


// variabile per il countdown
const countDownDate = new Date('Dec 25, 2022 00:00:00').getTime();

// data odierna
const now = new Date ().getTime();

// differenza di giorni tra natale e oggi
const daysLeft = countDownDate - now;
console.log(daysLeft);



