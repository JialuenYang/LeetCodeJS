/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
	// Excluding itself so 1 doesn't work
	if (num == 1) {
		return false;
	}

	const sqrt = Math.sqrt(num);
	let sum = 1;
	for (let i = 2; i < sqrt; i++) {
		if (Number.isInteger(num / i)) {
			sum += i + num / i;
		}
	}

	return sum == num;
};
