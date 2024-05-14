const isTabInView = () => !document.hidden;
const lastElement = arr => arr[arr.length - 1];
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};