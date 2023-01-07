/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
	for (let i = 2; i <= n - 2; i++) {
		const base = n.toString(i);
		for (let j = 0; j < Math.floor(base.length / 2); j++) {
			if (base[j] !== base[base.length - 1 - j]) {
				return false;
			}
		}
	}

	return true;
};
