/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
	// If s has "ba" substring, then condition fails.
	if (s.includes("ba")) {
		return false;
	}
	return true;
};
