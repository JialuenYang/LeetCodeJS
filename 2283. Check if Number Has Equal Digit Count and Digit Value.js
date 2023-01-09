/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
	const freq = new Array(10).fill(0);
	for (let i = 0; i < num.length; i++) {
		freq[parseInt(num[i])]++;
	}
	for (let i = 0; i < num.length; i++) {
		if (num[i] != freq[i]) {
			return false;
		}
	}
	return true;
};
