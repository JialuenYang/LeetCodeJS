/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function (n) {
	for (let i = 10; i >= 1; i--) {
		n -= i;
		if (n < 0) {
			return i % 2 == 1;
		}
	}
};
