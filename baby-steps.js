const sum = process.argv.reduce((acc, data) => {
	// process.argv also includes command ('node','module',...)
	const convertedNumber = +data;
	// --- START LOGGING ---
	// console.log('acc', acc);
	// console.log('data', data);
	// console.log('convertedNumber', convertedNumber);
	// console.log('---');
	// --- END LOGGING ---

	if (!Number.isNaN(convertedNumber)) return acc + convertedNumber;
	return acc;
}, 0);
process.stdout.write(sum + '\n');
