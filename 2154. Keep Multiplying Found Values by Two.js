/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
	nums.sort((a, b) => a - b);
	for (const num of nums) {
		if (num == original) {
			original = original * 2;
		}
	}
	return original;
};
