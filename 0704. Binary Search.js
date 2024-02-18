/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	const recursive = (l, r) => {
		const m = l + Math.floor((r - l) / 2);
		if (target == nums[m]) {
			return m;
		}
		if (l >= r) {
			return -1;
		}
		if (target < nums[m]) {
			return recursive(l, m - 1);
		}
		if (target > nums[m]) {
			return recursive(m + 1, r);
		}
	};

	return recursive(0, nums.length - 1);
};
