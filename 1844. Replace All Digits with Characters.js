/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
	// Strings are immutable in Javascript, so we will have to make a new one.
	const arr = s.split("");
	for (let i = 1; i < arr.length; i += 2) {
		arr[i] = shift(arr[i - 1], parseInt(arr[i]));
	}
	return arr.join("");
};

// Simple shift function using ASCII code
var shift = function (c, x) {
	return String.fromCharCode(c.charCodeAt(0) + x);
};
