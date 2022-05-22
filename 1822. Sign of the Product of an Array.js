/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
	// Use a boolean to keep track of pos / neg
	let isPos = true;
	for (const num of nums) {
		if (num == 0) {
			return 0;
		}
		if (num < 0) {
			isPos = !isPos;
		}
	}
	return isPos ? 1 : -1;
};
