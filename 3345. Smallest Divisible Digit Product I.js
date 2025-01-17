/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function (n, t) {
	// Brute force
	while (true) {
		if (
			String(n)
				.split("")
				.map((c) => parseInt(c))
				.reduce((acc, cur) => acc * cur, 1) %
				t ==
			0
		) {
			return n;
		}
		n++;
	}
};
