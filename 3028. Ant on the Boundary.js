/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
	let count = 0;
	let location = 0;
	for (const num of nums) {
		location += num;
		if (location == 0) {
			count++;
		}
	}
	return count;
};
