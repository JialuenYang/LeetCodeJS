/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function (s) {
	for (let i = 0; i < s.length - 1; i++) {
		const n1 = parseInt(s[i]);
		const n2 = parseInt(s[i + 1]);
		if (n1 % 2 == n2 % 2 && n1 > n2) {
			return s.substring(0, i) + s[i + 1] + s[i] + s.substring(i + 2);
		}
	}
	return s;
};
