const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
console.log( "A" - "B" + "2");