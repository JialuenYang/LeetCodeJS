/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
	const freq = new Map();
	for (const num of nums) {
		freq.set(num, (freq.get(num) ?? 0) + 1);
		if (freq.get(num) > 2) {
			return false;
		}
	}
	return true;
};
