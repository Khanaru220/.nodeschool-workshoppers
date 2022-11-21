const fs = require('fs');
// process.argv[2] as path is from homework
const filepath = process.argv[2];
const regex = /\n/g;
const data = fs.readFileSync(filepath, { encoding: 'utf-8' });

console.log(data.match(regex).length);
