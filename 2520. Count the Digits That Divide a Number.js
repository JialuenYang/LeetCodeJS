/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
	let output = 0;
	let n = num;
	while (n > 0) {
		const digit = n % 10;
		if (num % digit == 0) {
			output++;
		}
		n = Math.floor(n / 10);
	}
	return output;
};
