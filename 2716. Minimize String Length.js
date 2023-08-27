/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
	const set = new Set(s.split(""));
	return set.size;
};
