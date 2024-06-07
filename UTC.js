const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const apmRootPath = path.join(repositoryRootPath, 'apm');
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;