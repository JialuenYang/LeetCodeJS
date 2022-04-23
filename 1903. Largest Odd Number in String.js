/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
	// Start checking from end of string to find any odd digit.
	let index = num.length - 1;
	while (index >= 0) {
		if (parseInt(num[index]) % 2 == 0) {
			index--;
		} else {
			return num.substring(0, index + 1);
		}
	}
	return "";
};
