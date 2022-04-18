/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	const neg = x < 0 ? -1 : 1;
	if (neg == -1) {
		x = -x;
	}
	const reverseNum = neg * String(x).split("").reverse().join("");
	if (reverseNum < -1 * 2 ** 31 || reverseNum > 2 ** 31 - 1) {
		return 0;
	}
	return reverseNum;
};
