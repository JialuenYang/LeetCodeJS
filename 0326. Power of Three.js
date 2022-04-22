/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
	// If n is negative, it can't be a power of 3.
	if (n <= 0) {
		return false;
	}

	// Keep multipling by 3 from 1 until it's >= n.
	let num = 1;
	while (num <= n) {
		if (num == n) {
			return true;
		} else {
			num *= 3;
		}
	}
	return false;
};
