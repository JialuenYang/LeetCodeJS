/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function (num1, num2, num3) {
	let key = 0;
	for (let i = 0; i < 4; i++) {
		key += Math.min(num1 % 10, num2 % 10, num3 % 10) * 10 ** i;
		num1 = Math.floor(num1 / 10);
		num2 = Math.floor(num2 / 10);
		num3 = Math.floor(num3 / 10);
	}
	return key;
};
