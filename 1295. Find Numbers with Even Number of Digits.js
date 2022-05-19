/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
	let output = 0;
	for (let num of nums) {
		let count = 1;
		while (num >= 10) {
			num /= 10;
			count++;
		}
		if (count % 2 == 0) {
			output++;
		}
	}
	return output;
};
