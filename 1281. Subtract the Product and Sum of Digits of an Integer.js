/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
	let product = 1;
	let sum = 0;

	const nArr = Array.from(n.toString()).map(Number);
	for (digit of nArr) {
		product *= digit;
		sum += digit;
	}

	return product - sum;
};
