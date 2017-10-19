'use strict';
module.exports = input => {
	const isNotString = typeof input !== 'string';
	if (isNotString) {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	return input.replace(/[ХАКЕРСТВОНУМ]/g, l => {
		const en = 'XAKEPCTBOHYM';
		const ru = 'ХАКЕРСТВОНУМ';
		return en[ru.indexOf(l)];
	});
};
