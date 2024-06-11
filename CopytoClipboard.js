const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const lastElement = arr => arr[arr.length - 1];
const intermediateAppPath = path.join(buildOutputPath, 'app');