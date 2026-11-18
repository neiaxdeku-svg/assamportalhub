const fs = require('fs');
console.log(fs.readFileSync('ids.txt', 'utf8').split('\n').filter(Boolean).slice(-15).join('\n'));
