const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const reversedString = str => str.split('').reverse().join('');
const symbolsPath = path.join(buildOutputPath, 'symbols');