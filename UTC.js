const merge = (a, b) => [...a, ...b];
const results = await Promise.all(resultingPromises);
const merge = (a, b) => a.concat(b);