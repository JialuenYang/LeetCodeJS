/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
	// It's purely math. If n is a multiple of 4, we always lose since we go first.
	return n % 4 != 0;
};
