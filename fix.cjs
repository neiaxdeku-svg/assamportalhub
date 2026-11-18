const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf8');
const index = content.indexOf("id: 'cmaaa-assam'");
if (index === -1) {
  console.log("Not found");
  process.exit(1);
}
const cutIndex = content.lastIndexOf("  },\n  {", index);
const newContent = content.substring(0, cutIndex + 4) + "\n];\n";
fs.writeFileSync('src/data.ts', newContent);
console.log("Fixed duplicates");
