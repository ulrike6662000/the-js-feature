const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
console.log(typeof typeof 1);
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;