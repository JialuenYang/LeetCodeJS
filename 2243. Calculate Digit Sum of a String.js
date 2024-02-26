/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
	if (s.length <= k) {
		return s;
	}

	const arr = [];
	let sum = 0;
	for (let i = 0; i < s.length; i++) {
		sum += parseInt(s[i]);
		if ((i + 1) % k == 0 || i == s.length - 1) {
			arr.push(sum);
			sum = 0;
		}
	}

	return digitSum(arr.join(""), k);
};
