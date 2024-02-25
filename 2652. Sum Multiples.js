/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
	// Math solution
	const sum = (factor) => {
		const count = Math.floor(n / factor);
		return ((factor + factor * count) * count) / 2;
	};

	const sum3 = sum(3);
	const sum5 = sum(5);
	const sum7 = sum(7);
	const sum15 = sum(3 * 5);
	const sum21 = sum(3 * 7);
	const sum35 = sum(5 * 7);
	const sum105 = sum(3 * 5 * 7);

	return sum3 + sum5 + sum7 - sum15 - sum21 - sum35 + sum105;
};
