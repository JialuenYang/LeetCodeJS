/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
	let count = 0;

	while (n != 1) {
		if (n % 2 == 0) {
			n /= 2;
			count += n;
		} else {
			n = (n - 1) / 2 + 1;
			count += n - 1;
		}
	}
	return count;
};
