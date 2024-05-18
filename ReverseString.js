var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const isEmptyObject = obj => Object.keys(obj).length === 0;
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));