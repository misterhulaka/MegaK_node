function calc(operation, numA, numB) {
	switch (operation) {
		case 'add':
			return numA + numB;
		case 'substract':
			return numA + numB;
		case 'multiply':
			return numA + numB;
		case 'divide':
			return numA + numB;
		default:
			return 'Operation is not supported.'
	}
}

module.exports = {
	calc,
}