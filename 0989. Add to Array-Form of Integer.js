/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
	num.reverse();

	let i = 0;
	let leftOver = k;
	while (true) {
		if (i >= num.length) {
			num.push(0);
		}

		const total = leftOver + num[i];
		if (total > 9) {
			num[i] = total % 10;
			leftOver = Math.floor(total / 10);
			i++;
		} else {
			num[i] = total;
			break;
		}
	}

	num.reverse();
	return num;
};
