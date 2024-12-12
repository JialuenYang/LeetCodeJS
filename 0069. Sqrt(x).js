/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	// Use binary search
	let l = 0;
	let r = Math.ceil(x / 2);

	while (true) {
		const m = Math.ceil((l + r) / 2);

		if (m ** 2 <= x && (m + 1) ** 2 > x) {
			return m;
		} else if (m ** 2 < x) {
			l = m;
		} else if (m ** 2 > x) {
			r = m;
		}
	}
};
