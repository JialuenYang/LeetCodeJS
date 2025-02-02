/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
	const digits = String(num)
		.split("")
		.toSorted((a, b) => b - a)
		.map((c) => parseInt(c));
	let sum = 0;
	for (let i = 0; i < digits.length; i += 2) {
		sum += (digits[i] + (digits[i + 1] ?? 0)) * 10 ** (i / 2);
	}
	return sum;
};
