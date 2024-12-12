/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
	// Concatenate the string to itself, then remove the first and last character. If the original string exists in this new string, then return true.
	// Logic works similarly to string rotation.
	const str = s.concat(s);
	const removed = str.substring(1, str.length - 1);
	return removed.includes(s);
};
