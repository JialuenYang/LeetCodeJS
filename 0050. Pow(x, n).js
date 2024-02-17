/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
	const isPos = n >= 0;
	n = Math.abs(n);
	let arr = new Array(n);
	arr[0] = 1;
	arr[1] = x;

	const pow = (x, n) => {
		if (arr[n] !== undefined) {
			return arr[n];
		}

		let num = 0;
		if (n % 2 == 0) {
			num = pow(x, n / 2) ** 2;
		} else {
			num = pow(x, Math.ceil(n / 2)) * pow(x, Math.floor(n / 2));
		}

		arr[n] = num;
		return num;
	};

	return isPos ? pow(x, n) : 1 / pow(x, n);
};
