/*
1 read file
- async
- file path = process.argv[2]
2 return number of newlines
*/

const fs = require('fs');
const filepath = process.argv[2];
fs.readFile(filepath, { encoding: 'utf-8' }, (err, data) => {
	if (err) throw err;
	const newlines = data.split('\n').length - 1;
	console.log(newlines);
});
