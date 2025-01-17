/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function (s, k) {
	k = k % s.length;

	// Shift to the left by k
	return s.substring(k) + s.substring(0, k);
};
