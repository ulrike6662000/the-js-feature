const merge = (a, b) => [...a, ...b];
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const isEmptyArray = arr => !arr.length;
const scriptRootPath = path.join(repositoryRootPath, 'script');
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};