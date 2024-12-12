/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
	// Saving patterns as string requires \\ instead of \
	const integer = "[+-]?\\d+";
	const decimal = "[+-]?(\\d*\\.\\d+|\\d+\\.)";

	const reg = new RegExp(`^(${integer}|${decimal})([eE]${integer})?$`);

	return reg.test(s);
};
