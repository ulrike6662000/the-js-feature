const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);