const repositoryRootPath = path.resolve(__dirname, '..');
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const result = await makeHttpRequest(url);