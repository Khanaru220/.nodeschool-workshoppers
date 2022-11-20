const sumFromCommandline = process.argv.reduce((acc, data) => {
	// process.argv also includes command-text ('node','module',...)
	const convertedNumber = +data;

	if (!Number.isNaN(convertedNumber)) return acc + convertedNumber;
	return acc;
}, 0);
process.stdout.write(sumFromCommandline + '\n');
