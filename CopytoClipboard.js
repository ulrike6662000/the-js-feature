const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const randomString = () => Math.random().toString(36).slice(2);
console.log( "A" - "B" + "2");
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();