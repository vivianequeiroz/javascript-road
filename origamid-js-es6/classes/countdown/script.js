import Countdown from './countdown.js';

const timeUntilChristmas = new Countdown('24 December 2021 23:59:59 GMT-0300');
const timeUntilNewYear = new Countdown('31 December 2021 23:59:59 GMT-0300');

// console.log(timeUntilChristmas.days);
// console.log(timeUntilChristmas.hours);
// console.log(timeUntilChristmas.minutes);
// console.log(timeUntilChristmas.seconds);

console.log(timeUntilChristmas.total);

setInterval(() => {
    console.log(timeUntilNewYear.total);
}, 1000);
