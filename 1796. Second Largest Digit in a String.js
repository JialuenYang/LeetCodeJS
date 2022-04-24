/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
	// Mark all available digits in an array
	const digits = new Array(10).fill(null);
	const zero = "0".charCodeAt(0);
	const nine = "9".charCodeAt(0);
	for (const c of s) {
		if (zero <= c.charCodeAt(0) && c.charCodeAt(0) <= nine) {
			digits[parseInt(c)] = parseInt(c);
		}
	}
	// Filter out the digits not marked
	const trueDigits = digits.filter((d) => d !== null);
	// Only 0 to 1 digit are shown
	if (trueDigits.length < 2) {
		return -1;
	}
	return trueDigits[trueDigits.length - 2];
};
