const fs = require('fs');
let c = fs.readFileSync('src/data.ts', 'utf8');
const match = c.match(/export const SCHEMES: Scheme\[\] = \[(.*)\];/s);
if (match) {
  console.log("Found array, checking...");
} else {
  console.log("no match");
}
