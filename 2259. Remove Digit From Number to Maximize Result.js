/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
	// The key is knowing which index of digit to remove to get the largest number.
	// 1.) Remove the leftmost digit with a greater digit on the right of it.
	// 2.) If no such digit exists, remove the right most digit.
	let index = 0;
	for (let i = 0; i < number.length; i++) {
		if (number[i] === digit) {
			index = i;
			if (number.charCodeAt(i + 1) > number.charCodeAt(i)) {
				return number.substring(0, i) + number.substring(i + 1, number.length);
			}
		}
	}
	return (
		number.substring(0, index) + number.substring(index + 1, number.length)
	);
};
