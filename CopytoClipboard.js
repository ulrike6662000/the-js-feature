var regexp  = new RegExp('{{([^}]+)}}', 'g');
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();