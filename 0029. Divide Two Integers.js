/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
	const quotient = Math.trunc(dividend / divisor);
	const max = 2 ** 31 - 1;
	return quotient > max ? max : quotient;
};
