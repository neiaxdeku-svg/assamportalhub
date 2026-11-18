const fs = require('fs');
let lines = fs.readFileSync('src/data.ts', 'utf8').split('\n');

// Line 1860 is at index 1859
// We want to change 1860 to be `  },`
lines[1859] = "  },";

// Now delete from 1861 to 1877 (indices 1860 to 1876)
lines.splice(1860, 17);

fs.writeFileSync('src/data.ts', lines.join('\n'));
console.log("Fixed shiksha-setu corruption");
