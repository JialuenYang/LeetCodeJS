/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
	n = String(n)
		.split("")
		.map((c) => parseInt(c));

	let sum = 0;
	for (let i = 0; i < n.length; i++) {
		sum += i % 2 == 0 ? n[i] : -n[i];
	}
	return sum;
};
