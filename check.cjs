const fs = require('fs');
const c = fs.readFileSync('src/data.ts', 'utf8');
['pragyan-bharati', 'darpan-portal', 'nijut-moina', 'cmaaa', 'orunodoi', 'e-panjiyan', 'atal-amrit-abhiyan', 'ration-card-assam', 'mission-basundhara', 'sewa-setu', 'samarth-portal'].forEach(id => {
  const i = c.indexOf("id: '" + id + "'");
  if(i !== -1) console.log(id + ' exists');
  else console.log(id + ' missing');
});
