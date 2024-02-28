/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
	// Bit manipulation.
	// n - 1 will always be some 0's then 1111111's. & with n, then it will be 0.
	return n > 0 && (n & (n - 1)) === 0;
};
